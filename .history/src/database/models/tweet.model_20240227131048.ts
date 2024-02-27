import mongoose,{Document,Schema} from "mongoose";
import { ITweetInterface } from "../interface/tweet.interface"; 

const TweetSchema= new Schema <ITweetInterface>({

    tweetid: {type: String, required: true},
    content: {type: String, required: true},
    adminId:{type: String, required: true},
    createdAt:{type: String, required: true},
    
});
export default TweetSchema;