import {DataTypes, Model, Optional, Sequelize} from "sequelize";
import {db} from "../../db.ts";
export const User = db.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true
    },
    displayName:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    hash:{
        type:DataTypes.STRING
    },
    salt:{
        type:DataTypes.STRING
    },
    confirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})