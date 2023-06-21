import {literal, Sequelize} from "sequelize";
import User from "./schemas/User.ts";


export const DB = new Sequelize(
    process.env.DB_BASE ?? "",
    process.env.DB_USER ?? "",
    process.env.DB_PASS ?? '',
    {
        host: process.env.DB_HOST ?? "",
        dialect: 'mysql',
        logging: false
    }
)
export const initDatabase = async ()=>{
    try{
        await DB.authenticate()
        await  User(DB)
    }catch (e) {
        console.error(e)
    }
}