import {Document} from "mongoose";
export interface ITweetInterface extends Document{

    tweetid: string,
    tweets: string[],
    firstName:string,
    lastName:string,
    email:string,
    createdAt:string

};

