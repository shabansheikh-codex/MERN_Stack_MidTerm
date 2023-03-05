let express= require("express")
let mongoose = require("mongoose");
let app = express();
let cors = require('cors')
app.use(cors())
require("../db/config")
const products = require("../db/products")

app.use(express.json()); //middleware
app.get("/products",async(req, res)=>{  

    let meow =await products.find();
    res.send(meow)
})   

app.post("/create-Products" , async (req, res)=>{
   let abc = new products(req.body)
   let result = await abc.save();
   res.send(result);

})
app.listen(3200, ()=>{
    console.log("server is now connected")
})