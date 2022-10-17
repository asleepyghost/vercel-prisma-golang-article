import { PrismaClient } from "@prisma/client";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const prisma = new PrismaClient();

export default async (request: VercelRequest, response: VercelResponse) => {
  const planets = await prisma.planet.findMany();

  return response.status(200).json(planets);
};
