import express from 'express';
import { z, ZodError } from 'zod';
import { PrismaClient, Prisma } from '@prisma/client';

const prismaClient = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  express.json({
    limit: '3mb',
  })
);

// User routes

const userPostModel = z.object({
  body: z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().refine(
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

app.post('/user', async (req, res) => {
  const { body } = req;

  try {
    const { body: user } = userPostModel.parse({
      body: req.body,
      pathParams: req.params,
      queryParams: req.query,
    });

    const dbUser = await prismaClient.user.create({
      data: {
        ...user,
      },
    });

    res.status(201).json(dbUser);
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422).json(error.issues);
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        res.status(422).send('Users must have unique email addresses.');
      }
    }

    res.status(500).send('Server encountered an error.');
    return;
  }
});

const userPatchModel = z.object({
  body: z
    .object({
      email: z.string().email().optional(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      password: z.string().refine(
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
    })
    .optional(),
  pathParams: z.object({
    id: z.string(),
  }),
  queryParams: z.object({}),
});

app.patch('/user/:id', async (req, res) => {
  const { body: user, pathParams } = userPatchModel.parse({
    body: req.body,
    pathParams: req.params,
  });

  const { id } = pathParams;

  await prismaClient.user.update({
    where: {
      id: id,
    },
    data: {
      ...user,
    },
  });

  res.status(200).send('OK.');
  return;
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
