import {DataTypes, Model, Optional, Sequelize} from "sequelize";
import {db} from "../../db.ts";

export const Profile = db.define('Profile',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    level:{
        type:DataTypes.INTEGER,
        defaultValue:1,
    },
    experience:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    },
    precision:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    },
    quit_rate:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    },
    match_counter:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    visibility:{
        type:DataTypes.ENUM('GREEN','FORCE_GREEN','YELLOW','FORCE_YELLOW','RED','FORCE_RED','GRAY','FORCE_GRAY'),
        defaultValue:'gray'
    },
    silver:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    gold:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})