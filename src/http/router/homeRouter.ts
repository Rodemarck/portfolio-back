import express, {Express} from "express";

const router = express.Router();


export default (app:Express, prefix:string)=>{
    app.use(`${prefix}/home`,router)
}