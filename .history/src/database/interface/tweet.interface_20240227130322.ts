import {Document} from "mongoose";
export interface ITweetInterface extends Document{

    tweetid: string,
    content: string,
    adminId:string,
    createdAt:string
    
};

