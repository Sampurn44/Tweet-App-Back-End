import { Router } from "express";

const helloRouter = Router();

//Define route paths

helloRouter.get("/",()=>{
    return {"data":"Server is live!!!!"};
}) 