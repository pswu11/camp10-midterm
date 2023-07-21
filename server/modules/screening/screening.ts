import { app, prismaClient } from '../../index';
import { z } from 'zod';
import { Prisma, Screening } from '@prisma/client';

export async function screeningModule() {
  const screeningArrayPostModel = z.object({
    body: z.object({
      datetime: z.coerce.date(),
      movieId: z.number(),
      seatAvailability: z
        .number()
        .int({ message: 'seat availability can only be 0 or 1' })
        .lte(1, { message: 'seat availability can only be 0 or 1' })
        .gte(0, { message: 'seat availability can only be 0 or 1' })
        .array().length(54),
    }).array(),
    pathParams: z.object({}),
    queryParams: z.object({}),
  });

  app.post('/screening', async (req, res) => {
    try {
      const { body: screeningsInfo } = screeningArrayPostModel.parse({
        body: req.body,
        pathParams: req.params,
        queryParams: req.params,
      });
      const response = await prismaClient.screening.createMany({
        data: [
          ...screeningsInfo,
        ] as Screening[],
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
      res.status(500).send(error);
    }
  });

  app.get("/screening/:movieId", async (req, res) => {
    const { movieId } = req.params
    console.log(movieId)
    try {
      const screenings = await prismaClient.screening.findMany({
        where: {
          movieId: Number(movieId)
        }
      })
      console.log(screenings)
      res.json(screenings)
    } catch(err) {
      res.send(err)
    }
  })

  app.delete('/screening', async (_, res) => {
    try {
      const response = await prismaClient.screening.deleteMany({})
      res.status(200).json(response);
    } catch (err) {
      res.send(err);
    }
  });
}
