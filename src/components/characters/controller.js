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
    const edad = parseInt(age)
    const personajes = await prisma.personaje.findMany({
      where: {
        edad: edad,
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
