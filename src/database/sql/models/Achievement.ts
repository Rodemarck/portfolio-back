import {db} from "../../db.ts";
import {DataTypes} from "sequelize";

export const Achievement = db.define('Achievement',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
    },
    progress:{
        type:DataTypes.FLOAT
    },
    conclusion_time:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:null
    }
})