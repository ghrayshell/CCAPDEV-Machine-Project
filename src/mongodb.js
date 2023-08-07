const mongoose = require("mongoose")

    mongoose.connect("mongodb+srv://ghraziellederamos:g2kkVh5CyCq7bXSF@apdev-cluster.adbjjvk.mongodb.net/chemagdb").then(()=>{
    //mongoose.connect("mongodb://127.0.0.1:27017/chemagdb").then(()=>{
    console.log('mongo connected');
})

.catch((e)=>{
    console.log('mongo failed');
})

const userSchema = new mongoose.Schema({
    cname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})

const collection = new mongoose.model("useraccs", userSchema)

module.exports = collection