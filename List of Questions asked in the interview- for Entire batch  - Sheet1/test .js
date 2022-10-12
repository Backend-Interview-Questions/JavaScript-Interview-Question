const express = require('express')
const app = express()
//"<h1 style=text-align:center;margin-top:20%;font-size:200px;color:maroon;> Hello World </h1>"
app.get("/",(req,res)=>{
    res.send("<h1 style=text-align:center;margin-top:20%;font-size:150px;color:maroon> Hello World </h1>")
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})
