import {DataTypes, Sequelize} from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

console.log([])
export const db = new Sequelize(
    process.env.DB_BASE ?? "",
    process.env.DB_USER ?? "",
    process.env.DB_PASS ?? "",
    {
        host: process.env.DB_HOST ?? "",
        dialect: 'mysql',
        logging:true
    }
)
import {User} from "./sql/models/User.ts";
import {Profile} from "./sql/models/Profile.ts";
import {AnimeList} from "./sql/models/AnimeList.ts";
import {Achievement} from "./sql/models/Achievement.ts";
import {Configuration} from "./sql/models/Configuration.ts";


export const initDatabase = async ()=>{
    try{
        await db.authenticate().then(() => {
                console.log("Banco conectado");
            })
                .catch((erro: any) => {
                    console.log("Deu ruim na conexão com o banco: " + erro);
                });

        User.hasOne(Profile,{
            foreignKey:{
                name:'user_id'
            }
        })
        Profile.belongsTo(User)

        User.hasMany(AnimeList,{
            foreignKey:{
                name:'user_id'
            }
        })
        AnimeList.belongsTo(User)

        User.hasMany(Achievement,{
            foreignKey:{
                name:'user_id'
            }
        })
        Achievement.belongsTo(User)

        User.hasOne(Configuration,{
            foreignKey:{
                name:'user_id'
            }
        })
        Configuration.belongsTo(User)

        await Promise.all([
            User.sync({alter:true}),
            Profile.sync({alter:true}),
            AnimeList.sync({alter:true}),
            Achievement.sync({alter:true}),
            Configuration.sync({alter:true})
        ])

    }catch (e) {
        console.error(e)
    }
}