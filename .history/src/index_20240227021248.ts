// run "npm run dev" first then do further code
import express, {Express} from 'express';
import http from "http";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import router from './routes/routes';
const app:Express = express();
const server = http.createServer(app)

//Define the routes
app.use("/api/v1",router);

//Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.set("PORT",3000);
app.set("BASE_URL","localhost");


dotenv
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