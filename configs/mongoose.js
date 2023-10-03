const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO)
const db=mongoose.connection
db.on('error',()=>{
    console.log("error in db connection")
})
db.once('open',()=>{
    console.log("database is connected successfully")
})