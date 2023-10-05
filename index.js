require('dotenv').config()
const express=require('express')
const db=require('./configs/mongoose')
const port=8000 || process.env.PORT
const app=express()
const bodyParser=require('body-parser')
const expressEjsLayouts=require('express-ejs-layouts')

app.set('view engine','ejs');
app.set('views','./views')
app.set(expressEjsLayouts);
app.set('layout','./views/main')

app.use(express.static('assets'))
app.use(bodyParser.json())//here we are forwarding the data in the json formate
app.use('/',require('./server/routers/index'))

app.listen(port,()=>{
    console.log(`server is connected on the ${port}`)
})