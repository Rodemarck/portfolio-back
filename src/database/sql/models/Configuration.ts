import {db} from "../../db.ts";
import {DataTypes} from "sequelize";
export const Configuration = db.define('Configuration',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    theme:{
        type:DataTypes.ENUM('DARK','LIGHT'),
        defaultValue:'DARK'
    }
})