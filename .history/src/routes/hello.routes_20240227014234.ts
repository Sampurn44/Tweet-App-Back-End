import { Router,Request,Response } from "express";

const helloRouter = Router();

//Define route paths

helloRouter.get("/",(req:Request,res:Response=>{
    return {"data":"Server is live!!!!"};
}) 
export default helloRouter;