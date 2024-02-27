// run "npm run dev" first then do further code
import express, {Express} from 'express';
import http from "http";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import router from './routes/routes';
import mongoose from 'mongoose';
const app:Express = express();
const server = http.createServer(app)


//Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.set("PORT",3000);
app.set("BASE_URL","localhost");

dotenv.config();
//Define the routes
app.use("/api/v1",router);


//MongDB connection

const mongodbURI=process.env.MONGO_DB_URI
if(!mongodbURI) {
    console.error("Mongo URI not defined");
    process.exit(1);
}
mongoose.connect(mongodbURI,{}).then(()=>{console.log("MongoDB connected")
}).catch((error)=>{console.log(error)});
//start the server
try {
    const port:Number = app.get("PORT");
    const baseUrl:String =app.get("BASE_URL");
    server.listen(port ,():void => {
        console.log("listening");
    });
} catch (error) {
    console.log(error);
}
export default server;