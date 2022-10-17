import { PrismaClient } from "@prisma/client";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const prisma = new PrismaClient();

export default async (request: VercelRequest, response: VercelResponse) => {
  await prisma.planet.create({
    data: {
      name: request.body.name,
      size: Number(request.body.size),
    },
  });

  return response.status(200).json({ message: "Planet created" });
};
