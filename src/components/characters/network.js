import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);

export default testRouter;