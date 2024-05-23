import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app=express()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:"Hello World"
    })
})
app.get('/about',(req,res)=>{
    return res.status(200).json({
        message:"About Page"
    })
})
app.listen(process.env.PORT,()=>{
   console.log(`Listening on port ${process.env.PORT}`)
})