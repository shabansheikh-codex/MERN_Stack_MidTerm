const mongoose = require("mongoose")
 
const productSchema = new mongoose.Schema({

    name:String,
    desc:String,
    price:String
})

module.exports = mongoose.model("products", productSchema)