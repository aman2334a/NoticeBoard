var mysql=require("mysql")
var config={
    host:"localhost",
    user:"root",
    password:"",
    database:"noticeboard",
    dbdriver:"mysqli"
}

var conn=mysql.createConnection(config)
conn.connect(function(err){
    if(err)throw err
})
module.exports=conn