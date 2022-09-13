import { TestRouter } from "../components";
import { PersonajesRouter } from "../components";
import { PeliculasRouter } from "../components";
import { GenerosRouter } from "../components";
import { OnRouter } from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [
  ["/test", TestRouter],
  ["/on", OnRouter],
  ["/personajes", PersonajesRouter], 
  ["/peliculas", PeliculasRouter], 
  ["/generos", GenerosRouter]
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
