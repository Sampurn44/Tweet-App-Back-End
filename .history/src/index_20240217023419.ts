import express, {Express} from 'express';
import http from "http";
const app:Express = express();
const server = http.createServer(app)