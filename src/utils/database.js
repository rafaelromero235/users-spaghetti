const {Sequelize}= require('sequelize')

const db = new Sequelize ({
dialect:'postgres',
host:'localhost',
port:5433,
username:'postgres',
password:'root',
database:'users-db'

})

module.exports = db
