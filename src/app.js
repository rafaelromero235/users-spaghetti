const express = require('express')
const db = require('./utils/database')
const port = 9000
const routerUser=require('./users/users.router')

const app = express()

app.use(express.json())

app.use('/api/v1',routerUser)
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

db.authenticate()
.then(()=>{console.log('database authenticate succesfully')})
.then((err)=>{console.log(err)})

db.sync()
.then(()=>{
    console.log('db synced')
})
.catch((err)=>{console.log(err)})



app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
