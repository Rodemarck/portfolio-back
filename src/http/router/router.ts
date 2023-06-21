import sessionRouter from "./sessionRouter.ts";
import homeRouter from "./homeRouter.ts";
import {Express} from "express";

export default (app:Express)=>{
    let prefix = ''
    sessionRouter(app,prefix)
    homeRouter(app,prefix)
}