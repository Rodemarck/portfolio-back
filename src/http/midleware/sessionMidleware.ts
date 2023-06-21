import {NextFunction} from "express";

const isUserGuest = async (req:Request,res:Response,next:NextFunction)=>{
    next()
}

const isUserLogged = async (req:Request,res:Response,next:NextFunction)=>{
    next()
}
const hasPermission = (...args:string[])=>{
    return async (req:Request,res:Response,next:NextFunction)=> {
        next()
    }
}
const isGuest = async (req:Request,res:Response,next:NextFunction)=>{
    next()
}

export default {
    isUserGuest,
    isUserLogged,
    hasPermission,
    isGuest
}