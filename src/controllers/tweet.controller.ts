import { Request, Response } from "express";
import { getTweetRepo, createTweetRepo, deleteTweetRepo, updateTweetRepo, } from "../repositories/tweet.repositories";
import { ITweetInterface } from "../database/interface/tweet.interface";

export const getTweetController = async (req: Request, res: Response) => {

    const tweetId = req.query.tweetId as string;

    try {

        const tweet = await getTweetRepo(tweetId)
        if (tweet) {
            res.status(200).json({ 'data': tweet });

        }
        else {
            res.status(500).json({ 'error': "Tweet Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const createTweetController = async (req: Request, res: Response) => {

    const tweet: ITweetInterface = req.body;

    try {

        const sucess = await createTweetRepo(tweet)
        if (tweet) {
            res.status(200).json({ 'data': sucess });

        }
        else {
            res.status(500).json({ 'error': "Tweet Not Unable to create new tweet" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const updateTweetController = async (req: Request, res: Response) => {

    const updatedTweet: ITweetInterface = req.body;

    try {

        const update = await updateTweetRepo(updatedTweet.tweetid,updatedTweet)
        if (update) {
            res.status(200).json({ 'data': 'Tweet Update Successful' });

        }
        else {
            res.status(500).json({ 'error': "Tweet Updated  Failed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const deleteTweetController = async (req: Request, res: Response) => {

    const tweetId= req.query.tweetId as string;

    try {

        const sucess = await deleteTweetRepo(tweetId);
        if (sucess) {
            res.status(200).json({ 'data': 'Tweet deleted' });
        }
        else {
            res.status(500).json({ 'error': "Not Unable to delete tweet" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}