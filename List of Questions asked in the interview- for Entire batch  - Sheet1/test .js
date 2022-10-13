
// create Simple server
const express = require('express')
const app = express()
//"<h1 style=text-align:center;margin-top:20%;font-size:200px;color:maroon;> Hello World </h1>"
app.get("/",(req,res)=>{
    res.send("<h1 style=text-align:center;margin-top:20%;font-size:150px;color:maroon> Hello World </h1>")
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})

// Call,Apply and Bind

let Person1 = {"FirstName":"Pankaj","LastName":"Kumar Singhania" }
let Person2 = {"FirstName":"Ranjeet","LastName":"Kumar " }
let Person3 = {"FirstName":"Jitendra","LastName":"mukharji" }

function Greetings(Message1,Message2){
    console.log(Message1 + " "+ Message2)
}
Greetings.call(Person1,"Hello Mr.","How are you?")
