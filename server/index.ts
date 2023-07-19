import express, { Response } from 'express';
import { number, z, ZodError } from 'zod';
import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

import cors from 'cors';

// ? Crossorign ressource Cors prevent load js von different sources. Whitelist
const prismaClient = new PrismaClient();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

const PORT = process.env.PORT || 8000;

const secretKey =
  '6011d9c75dde2857028dad3fdb8bdef1bc49052645ca219c65e667fc03a9756c';

  // express method to limit the amount of data to 3mb
app.use(
  express.json({
    limit: '3mb',
  })
);

// User routes

// Checking the req, res with zod, standard and defined by our own "refine"....

const userPostModel = z.object({
  body: z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z
      .string()
      .min(8)
      .max(30)
      .refine(
        data => {
          let flag = false;

          for (const char of data) {
            if ('!@#$%^&'.includes(char)) {
              flag = true;
            }
          }

          return flag;
        },
        {
          message:
            'Password must include at least one special character: !@#$%^&',
        }
      ),
  }),
  pathParams: z.object({}),
  queryParams: z.object({}),
});

// Task: Zod must be implimented; token, is the user authorised?
//Look at line 220ff

 app.patch('/user/:id/bookmarks', async (req,res) => {
  const {id} = req.params;
  const {movieId} = req.query;
  try {
    await prismaClient.user.update ({
    where:{id:id},
    data: {bookmarks:{connect:{id:Number(movieId)}}}

    })
  } catch (error){

  }
 })


// Setup Routes /auth/signup /
// parse: zod method to compare the imput with the actuall stored data on db
app.post('/auth/signup', async (req, res) => {
  try {
    const { body: user } = userPostModel.parse({
      body: req.body,
      pathParams: req.params,
      queryParams: req.query,
    });
// omit: special method from loadash; creating an object using bcrypt, creating a hash with extra salt
    const dbUser = await prismaClient.user.create({
      data: {
        ..._.omit(user, ['password']),
        passwordHashAndSalt: await bcrypt.hash(user.password, 10),
      },
    });

    res.status(201).json(dbUser);
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422).json(error.issues);
      return;
    }
//Error handling
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        res.status(422).send('Users must have unique email addresses.');
        return;
      }
    }
// error handling
    res.status(500).send('Server encountered an error.');
    return;
  }
});

// Doing the same with patch

const userPatchModel = z.object({
  body: z.object({
    email: z.string().email().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z
      .string()
      .refine(
        data => {
          let flag = false;

          for (const char of data) {
            if ('!@#$%^&'.includes(char)) {
              flag = true;
            }
          }

          return flag;
        },
        {
          message:
            'Password must include at least one special character: !@#$%^&',
        }
      )
      .optional(),
  }),
  pathParams: z.object({
    id: z.string(),
  }),
  queryParams: z.object({}),
});

const postTokenModel = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().max(30),
  }),
  pathParams: z.object({}),
  queryParams: z.object({}),
});

// compare the hash = password

app.post('/auth/login', async (req, res) => {
  try {
    const { body: loginInfo } = postTokenModel.parse({
      body: req.body,
      pathParams: req.params,
      queryParams: req.query,
    });

    const user = await prismaClient.user.findUnique({
      where: { email: loginInfo.email },
    });

    let passwordMatches = false;

    if (user) {
      passwordMatches = await bcrypt.compare(
        loginInfo.password,
        user?.passwordHashAndSalt
      );
    }

    if (!user || !passwordMatches) {
      res
        .status(401)
        .send("Either user doesn't exist or password doesn't match");

      return;
    }

    // create a JSON web token (JWT)
    const token = jwt.sign(
      {
        id: user.id,
      },
      secretKey
    );

    res.status(201).json({
      token,
      user: _.pick(user, ['id', 'email', 'firstName', 'lastName']),
    });
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422).json(error.issues);
      return;
    }

    res.status(500).send('Server encountered an error.');
    return;
  }
});

type TokenPayload = {
  id: string;
};

app.patch('/user/:id', async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).send('Unauthorized.');
      return;
    }

    const { id: tokenUserId } = jwt.verify(
      token || '',
      secretKey
    ) as TokenPayload;

    const { body: user, pathParams } = userPatchModel.parse({
      body: req.body,
      pathParams: req.params,
      queryParams: req.query,
    });

    const { id: pathUserId } = pathParams;

    const idsMatch = tokenUserId === pathUserId;
    console.log(idsMatch);
    console.log(tokenUserId, pathUserId);

    if (!idsMatch) {
      res.status(401).send('You are not authorized to modify this user.');
      return;
    }

    await prismaClient.user.update({
      where: {
        id: tokenUserId,
      },
      data: {
        ..._.omit(user, ['password']),
        passwordHashAndSalt: user?.password
          ? await bcrypt.hash(user.password, 10)
          : undefined,
      },
    });

    res.status(200).send('OK.');
    return;
  } catch (error) {
    if (
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError ||
      error instanceof jwt.NotBeforeError
    ) {
      res.status(422).send(error.message);
    }

    if (error instanceof ZodError) {
      res.status(422).json(error.issues);
      return;
    }

    res.status(500).send('Server encountered an error.');
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

