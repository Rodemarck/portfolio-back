import {db} from "../../database/db.ts";
import bcrypt from "bcrypt";
import {TypedRequest} from "../../helper/typedRequest.ts";
import {returnJson} from "../../helper/http/returnJson.ts";
import {restMessages} from "../../helper/http/messages/restMessages.ts";


interface Login {
    username:string;
    password:string;
};
const formLogin = async (req:any, res:any) =>{}
const executeLogin = async (req:any, res:any) =>{
    let user = await db.models.User.findOne({
        where:{
            login:req.body.username
        }
    })
    bcrypt.compare(req.body.password, user?.dataValues.User.hash,(err,result)=>{

        if(result){
            return returnJson({req,res,data:{
                    login:user?.dataValues.login,
                    email:user?.dataValues.email,
                    avatar:user?.dataValues.avatar,
                    confirmed:user?.dataValues.confirmed
                }
            })
        }
        returnJson({req,res,data:{
                error:{
                    code:400,
                    message:restMessages.login.senha
                }
            }})
    })
}
const formRegister = async (req:any, res:any) =>{}
const executeRegister = async (req:any, res:any) =>{

}
const executeLogout = async (req:any, res:any) =>{
    req.session.destroy((err:any)=>{
        if(!err){
            return res.redirect('/home')
        }
        res.redirect('/')
    })
}
const getDetails = async(req:any, res:any)=>{}

export default {
    formLogin,
    executeLogin,
    formRegister,
    executeRegister,
    executeLogout,
    getDetails
}