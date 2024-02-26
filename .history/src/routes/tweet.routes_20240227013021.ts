import { Router } from "express";

const tweetRouter = Router();

//Define route paths

tweetRouter.get("/:userId",getUserController)
tweetRouter.post("/",createUserController)
tweetRouter.delete("/:userId",deleteUserController)
tweetRouter.put("/",updateUserController)


export default userRouter;
