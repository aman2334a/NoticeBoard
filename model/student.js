const conn=require('../db/config')

const getAllRecordOfStudent=(next)=>{
    conn.query("select * from student ",function(err,result){
        if(err) return next(err)
        next(null,result)
    })
}

const login=(data,next)=>{
    let username=data.username
    let password=data.password
    conn.query("select * from student where username= '"+username+"' and password='"+password+"'",function(err,result){
        if(err) return next(err)
        next(null,result)
    })

}
module.exports={getAllRecordOfStudent,login}