// run "npm run dev" first then do further code
import express, {Express} from 'express';
import http from "http";
import cors from "cors";
const app:Express = express();
const server = http.createServer(app)

//Express Configuration
app.use(cors())