import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
    //fOR CHARACTERS
    /* const personajes = await prisma.personaje.findMany({
      select: {
        id: true,
        nombre: true,
        imagen: true,
      },
    }); */
    const personajes = await prisma.personaje.findMany();

    res.json({
      ok: true,
      data: personajes,
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
    const user = await prisma.personaje.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { body } = req;
    body.id = id;
    const updatePersonaje = await prisma.personaje.update({
      where: {
        id: id,
      },
      data: {
        ...body
      },
    })

    res.json({
      ok: true,
      data: updatePersonaje,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
  
    const deletePersonaje = await prisma.personaje.delete({
      where: {
        id: id,
      }
    })

    res.json({
      ok: true,
      data: deletePersonaje,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const detalle = async (req, res) => {
  try {
    
    const id = parseInt(req.params.id)

    const personaje_movies = await prisma.peliculasOnPersonajes.findMany(
      {
        where: {
          personajeId: id,
        },
        include: {
          personaje: true,
          pelicula: true,
        }
      }
    );
    
    res.json({
      ok: true,
      data: {
        personaje: personaje_movies,
      },
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};
