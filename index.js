const express = require('express');
const app = express()
const userRouter = require("./router/userRouter")
const database = require("./database")
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

database();
app.use(userRouter)

app.listen(8080, ()=>{
    console.log("Server started at http://localhost:8080");
})