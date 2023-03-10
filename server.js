const dotenv = require("dotenv")
const mongoose = require('mongoose')
const express = require('express');
const path=require('path');
const app = express();
const cookieParser=require("cookie-parser");
app.use(cookieParser());
dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json()); 

app.use(require('./router/auth'))
// const User = require('./model/userSchema')


const PORT = process.env.PORT;

//middleware


// app.get('/', (req, res) => {
//     res.send(`Hello world azam, khan is here for you`)
// })
// app.get('/about', middleware, (req, res) => {
//     res.send(`Hello world this is about azam, khan is here for you`)
// })
// app.get('/contact', (req, res) => {
//     res.send(`Hello world  this is contact page azam, khan is here for you`)
// })
app.get('/signin', (req, res) => {
    res.send(`Hello world  this is signing in  page for the application of azam, khan is here for you`)
})
app.get('/registration', (req, res) => {
    res.send(`Hello world this is registration page `)
})


    //*Set static folder up in production
    app.use(express.static(path.join(__dirname, "./client/build")));

    app.get('*', (req,res) => res.sendFile(path.join(__dirname, "./client/build/index.html"))); 
  

app.listen(PORT, () => {
    console.log(`server is running at the port ${PORT}`);
})