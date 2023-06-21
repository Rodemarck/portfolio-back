import {DB} from "../../database/db.ts";
import bcrypt from "bcrypt";
import {TypedRequest} from "../../helper/typedRequest.ts";


interface Login {
    username:string;
    password:string;
};
const formLogin = async (req:Request, res:Response) =>{}
const executeLogin = async (req:TypedRequest<any, Login>, res:Response) =>{
    let user = await DB.models.User.findOne({
        where:{
            login:req.body.username
        }
    })
    bcrypt.compare(req.body.password, user?.dataValues.User.hash,(err,result)=>{
        if(result){

        }   
    })
}
const formRegister = async (req:Request, res:Response) =>{}
const executeRegister = async (req:Request, res:Response) =>{}
const executeLogout = async (req:Request, res:Response) =>{}
const getDetails = async(req:Request, res:Response)=>{}

export default {
    formLogin,
    executeLogin,
    formRegister,
    executeRegister,
    executeLogout,
    getDetails
}