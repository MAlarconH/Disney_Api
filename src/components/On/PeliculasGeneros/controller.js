import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
    const users = await prisma.generosOnPeliculas.findMany();
    res.json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};


export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = await prisma.generosOnPeliculas.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.json({
      ok: false,
      data: error.message,
    });
  }
};
