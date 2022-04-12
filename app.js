const port=5000
const express=require("express")
const { json } = require("express/lib/response")
const student=require('./Router/student')
const teacher=require('./Router/teacher')
const app=express()
app.get('/',function(req,res){
    // res.send(JSON.stringify(req))
    console.log(req)
})
app.use('/student',student)// Student Route
app.use('/teacher',teacher)// Teacher Route

app.listen(port,()=>{
    console.log("listening on "+port)
})