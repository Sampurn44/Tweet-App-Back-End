import mongoose,{Document,Schema} from "mongoose";
import { IUserInterface } from "../interface/user.interface";

const UserSchema= new Schema <IUserInterface>({
    uid: {type: "string", required: true},
    tweets: {type: [String], required: true},
    firstName:string,
    lastName:string,
    email:string,
    createdAt:string
})