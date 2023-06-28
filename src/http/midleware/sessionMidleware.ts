import {NextFunction} from "express";
import {redis} from "../../initSession.ts";

const isUserGuest = async (req:any,res:any,next:NextFunction)=>{
    if(!req.session.name){
        return next()
    }
    res.redirect('/home')
}

const isUserLogged = async (req:any,res:any,next:NextFunction)=>{
    if(!req.session.name){
        return res.redirect('/login')
    }
    next()
}

const updateSocketCard = async(req:any, res:any, next:NextFunction)=>{
    //redis.get
}
const hasPermission = (...args:string[])=>{
    return async (req:any,res:any,next:NextFunction)=> {
        next()
    }
}

export default {
    isUserGuest,
    isUserLogged,
    hasPermission
}