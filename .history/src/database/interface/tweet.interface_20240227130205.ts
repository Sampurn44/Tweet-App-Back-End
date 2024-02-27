import {Document} from "mongoose";
export interface ITweetInterface extends Document{

    tweetid: string,
    title: string[],
    firstName:string,
    lastName:string,
    email:string,
    createdAt:string

};

