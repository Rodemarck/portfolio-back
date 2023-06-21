import Sequelize, {DataTypes} from "sequelize";

export default (DB:Sequelize.Sequelize) => DB.define('User',    {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    login:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    hash:{
        type:DataTypes.STRING,
        allowNull:false
    },
    confirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    },
    avatar:{
        type:DataTypes.STRING,
        defaultValue: 'https://imgur.com/IZPIUzJ',
        allowNull:false
    }
})