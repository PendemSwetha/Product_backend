const express=require("express");
const mongoose=require("mongoose");
const app=require("./app.js");

mongoose.connect('mongodb+srv://swetha:swetha123@cluster0.ti0orle.mongodb.net/?retryWrites=true&w=majority',(e)=>{
    console.log("connected to db");
    if(e){
        console.log(e.message);
    }
})

app.listen(3000,()=>{
    console.log("port is up at 3000");
})