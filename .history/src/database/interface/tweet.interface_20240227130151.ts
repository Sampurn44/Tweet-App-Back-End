import {Document} from "mongoose";
export interface ITweetInterface extends Document{

    uid: string,
    tweets: string[],
    firstName:string,
    lastName:string,
    email:string,
    createdAt:string

};

