import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
  const name = req.query.name;
  const age = req.query.age;
  const movies = req.query.movies;
  let found;
  if(name){
    const personajes = await prisma.personaje.findMany({
      where: {
        nombre: name,
      },
      select: {
        id: true,
        imagen: true,
        nombre: true,
      },
    });
    found = personajes
  }
  else if(age){
    const personajes = await prisma.personaje.findMany({
      where: {
        edad: age,
      },
      select: {
        id: true,
        imagen: true,
        nombre: true,
      },
    });
    found = personajes
  }
  else if(movies){
    const id = parseInt(movies)
    const personaje_movies = await prisma.peliculasOnPersonajes.findMany(
      {
        where: {
          peliculaId: id,
        },
        include: {
          personaje: {
            select: {
            id: true,
            imagen: true,
            nombre: true,
          }
        },
        }
      }
    );
    found = personaje_movies
  }else{
    const personajes = await prisma.personaje.findMany({
      select: {
        id: true,
        imagen: true,
        nombre: true,
      },
    });
    found = personajes
  }

  
  res.json({
    ok: true,
    data: found,
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

    const detalle_personaje = await prisma.personaje.findMany(
      {
        where: {
          id: id,
        },
        include: {
          peliculas: {
            where: {
              personajeId: id,
            },
            include: {
              pelicula: true,
            }
          }
        }
      }
    )
    /* const personaje_movies = await prisma.peliculasOnPersonajes.findMany(
      {
        where: {
          personajeId: id,
        },
        include: {
          personaje: true,
          pelicula: true,
        }
      }
    ); */
    
  res.json({
      ok: true,
      data: {
        personaje: detalle_personaje,
      },
    });
  } catch (error) {
    console.log(error);
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
    console.log(error.message);
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


