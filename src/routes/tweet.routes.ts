import { Router } from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();

//Define route paths

tweetRouter.get("/:tweetId",getTweetController)
// tweetRouter.get("/:",getAllTweetsController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:userId",deleteTweetController)
tweetRouter.put("/",updateTweetController)


export default tweetRouter;
