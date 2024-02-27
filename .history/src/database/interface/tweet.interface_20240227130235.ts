import {Document} from "mongoose";
export interface ITweetInterface extends Document{

    tweetid: string,
    content: string,
    firstName:string,
    lastName:string,
    email:string,
    createdAt:string

};

