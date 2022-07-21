const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT||3001;
const app=express();
const cors=require("cors")
const uuid = require('uuid');

app.get("/getUUID",(req,res)=> {res.send(uuid.v4())});

app.listen(PORT,()=>{console.log(`Server Started on port=${PORT}`)});