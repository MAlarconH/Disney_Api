import { Router } from "express";
import * as Controller from "./controller";

const authRouter = Router();

authRouter.route("/register").post(Controller.signUp);
authRouter.route("/login").post(Controller.signIn);

export default authRouter;