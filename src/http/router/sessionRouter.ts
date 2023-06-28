import express, {Express} from "express";
import {validation} from "../midleware/validationMidlaware.ts";
import sessionController from "../controller/sessionController.ts";
import sessionMidleware from "../midleware/sessionMidleware.ts";
const router = express.Router();


router.get('/login',
    validation('login'),
    sessionMidleware.isUserGuest,
    sessionController.formLogin)

router.post('/login',
    validation('login'),
    sessionMidleware.isUserGuest,
    sessionController.executeLogin)

router.get('/register',
    validation('register'),
    sessionMidleware.isUserGuest,
    sessionController.formRegister)

router.post('/register',
    validation('register'),
    sessionMidleware.isUserGuest,
    sessionController.executeRegister)

router.post('/logout'
    ,sessionMidleware.isUserLogged,
    sessionController.executeLogout)

export default (app:Express, prefix:string)=>{
    app.use(`${prefix}/sessao`,router)
}