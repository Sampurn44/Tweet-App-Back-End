"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetController = exports.createTweetController = exports.deleteTweetController = exports.getTweetController = void 0;
const tweet_repositories_1 = require("../repositories/tweet.repositories");
const user_repositories_1 = require("../repositories/user.repositories");
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const tweet = yield (0, tweet_repositories_1.getTweetRepo)(tweetId);
        if (tweet) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ error: "Tweet Not Found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getTweetController = getTweetController;
const deleteTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const success = yield (0, tweet_repositories_1.deleteTweetRepo)(tweetId);
        if (success) {
            res.status(200).json({ data: "Tweet Deleted" });
        }
        else {
            res.status(500).json({ error: "Tweet Not Deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.deleteTweetController = deleteTweetController;
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repositories_1.createTweetRepo)(tweet);
        if (success) {
            const userUpdateSuccess = yield (0, user_repositories_1.updateUserWithTweetIdRepo)(tweet.adminId, tweet.tweetid);
            if (userUpdateSuccess) {
                res.status(200).json({ data: tweet });
            }
            else {
                res.status(500).json({ error: "User Not Updated" });
            }
        }
        else {
            res.status(500).json({ error: "Tweet Not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createTweetController = createTweetController;
const updateTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTweet = req.body;
    console.log(updatedTweet);
    try {
        const update = yield (0, tweet_repositories_1.updateTweetRepo)(updatedTweet.tweetid, updatedTweet);
        if (update) {
            res.status(200).json({ data: "Tweet Updated" });
        }
        else {
            res.status(500).json({ error: "Tweet Not Updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updateTweetController = updateTweetController;
