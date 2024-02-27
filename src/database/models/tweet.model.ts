import mongoose,{Schema} from "mongoose";
import { ITweetInterface } from "../interface/tweet.interface"; 

const TweetSchema= new Schema <ITweetInterface>({

    tweetid: {type: String, required: true},
    content: {type: String, default:''},
    adminId:{type: String, required: true},
    createdAt:{type: String, required: true},
    
});

const TweetModel= mongoose.model<ITweetInterface>('TweetModel',TweetSchema);
export default TweetModel;