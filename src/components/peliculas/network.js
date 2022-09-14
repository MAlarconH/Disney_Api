import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);
testRouter.route("/:id").get(Controller.detalle);
testRouter.route("/").post(Controller.create);

export default testRouter;