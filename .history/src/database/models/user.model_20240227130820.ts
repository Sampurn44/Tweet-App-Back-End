import mongoose,{Document,Schema} from "mongoose";
import { IUserInterface } from "../interface/user.interface";

const UserSchema= new Schema <IUserInterface>({
    uid: {type: String, required: true},
    tweets: {type: [String], default: []},
    firstName:{type: String, default: "User",},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    createdAt:{type: String, required: true},
})