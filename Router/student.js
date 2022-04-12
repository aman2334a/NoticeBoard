// const { Router } = require('express')
const express=require('express')
const router=express.Router()
const studentcontroller=require('../controller/student')
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/',function(req,res){ // student test route
    res.send("student")
})
router.get('/getall',function(req,res){ // get All data of student table
    studentcontroller.allStudents(req,res)
})
router.get('/login',function(req,res){ // get data on basis of username and password
    studentcontroller.login(req,res)
})
module.exports=router