import { Router } from "express";
import * as Controller from "./controller";
import * as Middleware from "../../../middlewares";
const testRouter = Router();

testRouter.route("/").get( Middleware.isAuthenticated , Controller.findAll);
testRouter.route("/").post( Middleware.isAuthenticated , Controller.create);

export default testRouter;