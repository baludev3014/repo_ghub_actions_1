const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/roite',(req,res)=>{
    res.send("new route")
})

app.listen(4000,()=>{
    console.log("App is listening on port 4000")
})