import mongoose from "mongoose";
import TweetModel from "../database/models/tweet.model";
import { ITweetInterface } from "../database/interface/tweet.interface";

export const getTweetRepo = async (
    tweetId: string
  ): Promise<ITweetInterface | null> => {
    try {
      const tweet = await TweetModel.findOne({ tweetid: tweetId });
      return tweet;
    } catch (error) {
      console.log("Error in getTweetRepo:", error);
      return null;
    }
  };
  
  export const deleteTweetRepo = async (tweetId: string): Promise<boolean> => {
    try {
      const deleted = await TweetModel.findOneAndDelete({ tweetid: tweetId });
      if (deleted) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  
  export const createTweetRepo = async (
    tweet: ITweetInterface
  ): Promise<boolean> => {
    try {
      await TweetModel.create(tweet);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  
  export const updateTweetRepo = async (
    tweetId: string,
    updatedTweet: ITweetInterface
  ): Promise<boolean> => {
    try {
      const result = await TweetModel.findOneAndUpdate(
        { tweetid: tweetId },
        updatedTweet,
        { new: true }
      );
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  