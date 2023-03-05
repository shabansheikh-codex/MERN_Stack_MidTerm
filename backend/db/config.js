const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/midTermProject" , ()=>{
    console.log("DB is conected")
})
