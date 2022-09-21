import { Router } from "express";
import * as Controller from "./controller";
const jwt = require("jsonwebtoken");
import * as Middleware from "../../middlewares";
const testRouter = Router();


testRouter.route("/").get( Middleware.isAuthenticated ,Controller.findAll);
testRouter.route("/:id").get( Middleware.isAuthenticated , Controller.detalle);
testRouter.route("/").post( Middleware.isAuthenticated , Controller.create);
testRouter.route("/:id").put( Middleware.isAuthenticated , Controller.update);
testRouter.route("/:id").delete( Middleware.isAuthenticated , Controller.deleteById);


export default testRouter;