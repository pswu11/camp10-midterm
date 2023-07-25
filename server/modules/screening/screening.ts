import { app, prismaClient } from '../../index';
import { ZodError, z } from 'zod';
import { Prisma, Screening } from '@prisma/client';

export async function screeningModule() {
  const screeningArrayPostModel = z.object({
    body: z
      .object({
        datetime: z.coerce.date(),
        movieId: z.number(),
        seatAvailability: z
          .number()
          .int({ message: 'seat availability can only be 0 or 1' })
          .lte(1, { message: 'seat availability can only be 0 or 1' })
          .gte(0, { message: 'seat availability can only be 0 or 1' })
          .array()
          .length(54),
      })
      .array(),
    pathParams: z.object({
      movieId: z.number().optional()
    }),
    queryParams: z.object({
      date: z.string().datetime().optional()
    }),
  });

  app.post('/screening', async (req, res) => {
    try {
      const { body: screeningsInfo } = screeningArrayPostModel.parse({
        body: req.body,
        pathParams: req.params,
        queryParams: req.params,
      });
      const response = await prismaClient.screening.createMany({
        data: [...screeningsInfo] as Screening[],
      });
      res.status(201).json(response);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        res.status(422).send(error.message);
        return;
      }
      if (error instanceof Prisma.PrismaClientValidationError) {
        res.send(error.message);
        return;
      }
      if (error instanceof ZodError) {
        res.send(error.message)
      }
      // if (error instanceof Error) {
      //   console.log(error.stack, error.message, error.name)
      //   res.send(error.message)
      // }
      res.status(500).send(error);
    }
  });

  app.get('/screening/:movieId', async (req, res) => {
    const { movieId } = req.params;
    const { date } = req.query;
    const queryDate = new Date(date as string)
    console.log(queryDate) 

    try {
      const screenings = await prismaClient.screening.findMany({
        where: {
          movieId: Number(movieId),
          datetime: {
            gt: queryDate && undefined
          }
        },
      });
      res.json(screenings);
    } catch (err) {
      res.send(err);
    }
  });

  app.delete('/screening', async (_, res) => {
    try {
      const response = await prismaClient.screening.deleteMany({});
      res.status(200).json(response);
    } catch (err) {
      res.send(err);
    }
  });
}
