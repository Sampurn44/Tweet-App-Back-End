import { Router } from "express";

const userRouter = Router();

//Define route paths

userRouter.get("/:userId",getUserController);
userRouter.get("/:
