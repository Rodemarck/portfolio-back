import {db} from "../../db.ts";
import {DataTypes} from "sequelize";

export const AnimeList = db.define('AnimeList',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    platform:{
        type:DataTypes.ENUM('MAL','ANILIST','KITSU','ANN'),
        defaultValue:'ANILIST'
    },
    name:{
        type:DataTypes.STRING
    },
    watching:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    },
    completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    on_hold:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    dropped:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    planning:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})