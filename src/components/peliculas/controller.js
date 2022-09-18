import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {

  try {
    const name = req.query.name;
    const gender = req.query.gender;
    const order = req.query.order;
    let found;
    if(name){
      const peliculas = await prisma.pelicula.findMany({
        where: {
          titulo: name,
        },
        select: {
          id: true,
          titulo: true,
          imagen: true,
          fecha_ini: true,
        },
      });
      found = peliculas
    }
    else if(gender){
      const genero = parseInt(gender)
      const peliculas = await prisma.generosOnPeliculas.findMany({
        where: {
          generoId: genero,
        },
        include: {
          pelicula: true
        },
      });
      found = peliculas
    }
    else if(order){
      const personaje_movies = await prisma.pelicula.findMany(
        {
          orderBy: {
            createdAt: order,
            /* createdAt: 'asc', */
            /* createdAt: 'desc', */
          },
        }
      );
      found = personaje_movies
    }else{
      const peliculas = await prisma.pelicula.findMany({
        select: {
          id: true,
          imagen: true,
          titulo: true,
          fecha_ini: true,
        },
      });
      found = peliculas
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

    let movie_found;

    const movies_personajes = await prisma.peliculasOnPersonajes.findMany(
      {
        where: {
          peliculaId: id,
        },
        include: {
          pelicula: true,
          personaje: true, 
        }
      }
    );

    if(movies_personajes.length >= 1){
      movie_found = movies_personajes;
    }else{

      const movie = await prisma.pelicula.findMany({
        where: {
          id: id,
        },
        include:{
          personajes: true
        }
      });


      movie_found = movie;
    }

    res.json({
      ok: true,
      data: {
        pelicula: movie_found,
      },
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
    const user = await prisma.pelicula.create({
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
    const updatePelicula  = await prisma.pelicula.update({
      where: {
        id: id,
      },
      data: {
        ...body
      },
    })

    res.json({
      ok: true,
      data: updatePelicula ,
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
  
    const deletePelicula  = await prisma.pelicula.delete({
      where: {
        id: id,
      }
    })

    res.json({
      ok: true,
      data: deletePelicula ,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};


