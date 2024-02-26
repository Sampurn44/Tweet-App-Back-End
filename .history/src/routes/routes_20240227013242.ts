import { Router } from "express";
import userRouter from "./user.routes";
import tweetRouter from "./tweet.routes";

const router =Router();
router.use('/user',userRouter);

router.use('/user',tweetRouter);
export default router;