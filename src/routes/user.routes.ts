import { Router } from "express";
import { createUserController, deleteUserController, getUserController, updateUserController } from "../controllers/user.controller";

const userRouter = Router();

//Define route paths

userRouter.get("/:userId",getUserController)
userRouter.post("/",createUserController)
userRouter.delete("/:userId",deleteUserController)
userRouter.put("/",updateUserController)


export default userRouter;
