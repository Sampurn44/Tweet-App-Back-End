import { Router } from "express";

const tweetRouter = Router();

//Define route paths

tweetRouter.get("/:tweetId",getTweetController)
tweetRouter.get("/:tweetId",getTweetController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:tweetId",deleteTweetController)
tweetRouter.put("/",updateTweetController)


export default userRouter;
