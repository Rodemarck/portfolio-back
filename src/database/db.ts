import {literal, Sequelize} from "sequelize";
import User from "./schemas/User.ts";


console.log([])
const __DB:{db:Sequelize} = {
    db:new Sequelize({dialect:"mysql"})
}
export const DB = ()=>{
    return __DB.db
};
export const initDatabase = async ()=>{
    try{
        __DB.db = new Sequelize(
            process.env.DB_BASE ?? "",
            process.env.DB_USER ?? "",
            process.env.DB_PASS ?? "",
            {
                host: process.env.DB_HOST ?? "",
                dialect: 'mysql',
                logging:true
            }
        )
        await DB().authenticate().then(() => {
                console.log("Banco conectado");
            })
                .catch((erro: any) => {
                    console.log("Deu ruim na conexão com o banco: " + erro);
                });



        await  User(DB())
    }catch (e) {
        console.error(e)
    }
}