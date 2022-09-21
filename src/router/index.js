import { PersonajesRouter } from "../components";
import { PeliculasRouter } from "../components";
import { GenerosRouter } from "../components";
import { OnPPRouter } from "../components";
import { OnPGRouter } from "../components";
import { AuthRouter } from "../components";

// cada vez que quiera agregar una ruta nueva,
// creo el path e importo el componente

const listRoutes = [
  ["/auth",AuthRouter],
  ["/onpg", OnPGRouter],
  ["/onpp", OnPPRouter],
  ["/characters", PersonajesRouter], 
  ["/movies", PeliculasRouter], 
  ["/generos", GenerosRouter],
];



export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
