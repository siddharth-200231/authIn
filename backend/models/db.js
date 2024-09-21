const mongoose=require('mongoose')
const mongo_url=process.env.MONGO_CONN
mongoose.connect(mongo_url).then(()=>{
    console.log("Mongoose Connected")
}).catch((e)=>console.log(e))