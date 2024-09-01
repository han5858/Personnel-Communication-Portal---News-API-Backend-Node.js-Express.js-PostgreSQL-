const express = require('express')// express framework'ü projeye dahil edildi. Web sunucu oluştumak için kullanıldı
const  {postgresClient} = require('./config/db.js')// Veritabanı bağlantısını sağlamak için postgresClient dahil edildi.


const app=express()//Yeni bir express uygulaması oluşturuldu.
app.use(express.json())// Gelen ve giden verileri JSON verileri ile çalışması sağlandı.

const haber=require("./userRouter") //

app.use('/',haber)

app.listen(3212,()=>{
    console.log('Listening on port ${PORT}')
   
    
})