const {DataTypes}= require('sequelize')

const db = require('../utils/database')

const Users = db.define('users',{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
        password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday:{
        type:DataTypes.DATEONLY,
        

    }
},{
    timestamps:false
})
 module.exports = Users


