require('dotenv').config()
const express=require('express')
const port=8000 || process.env.PORT
const app=express();

app.listen(port,()=>{
    console.log(`server is connected on the ${port}`)
})