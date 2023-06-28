import express, {Express} from "express";

const router = express.Router();

router.get('/',(req:any, res:any)=>{
    res.render('home')
})
export default (app:Express, prefix:string)=>{
    app.use(`${prefix}`,router)
}