import { Router } from "express";

const tweetRouter = Router();

//Define route paths

userRouter.get("/:userId",getUserController)
userRouter.post("/",createUserController)
userRouter.delete("/:userId",deleteUserController)
userRouter.put("/",updateUserController)


export default userRouter;
