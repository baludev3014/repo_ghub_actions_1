const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/route',(req,res)=>{
    res.send("new route")
})

app.get('/orders',(req,res)=>{
    res.send("Orders");
})

app.get('/demo',(req,res)=>{
    res.send("demo")
})

app.listen(4000,()=>{
    console.log("App is listening on port 4000")
})