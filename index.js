const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:'',
    database: process.env.DATABASE
})
db.connect((error) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("database is connnected ...")
    }
})

app.get("/home", (req, res) =>{
    res.send("<h1>Hello world</h1>")
    // console.log("hellow")
})

app.listen(6000, () =>{
    console.log("App is running ...")
})