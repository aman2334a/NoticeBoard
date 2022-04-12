const express=require('express')
const app=express()
const studentModel=require('../model/student')


const allStudents=async(req,res)=>{ // method to get all student records
    studentModel.getAllRecordOfStudent((err,result)=>{
        if(err){
            res.sendStatus(404)
        } 
        else{
            res.send(result)
        } 
        })        
}
const login=(req,res)=>{ // method for login
    studentModel.login(req.body,(err,result)=>{
        if(err){
            console.log(err)
            res.sendStatus(404)
            
        }else{
            if(result.length>0){
                // res.send(result)
                res.send("logged in")
            }else{
                res.send("not matched")
            }
        }
    })
}


module.exports={allStudents,login}