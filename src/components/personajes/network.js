import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);
testRouter.route("/").post(Controller.create);
testRouter.route("/:id").put(Controller.update);
testRouter.route("/:id").delete(Controller.deleteById);
testRouter.route("/:id").get(Controller.detalle);

export default testRouter;