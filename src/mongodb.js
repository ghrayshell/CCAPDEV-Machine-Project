const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/chemagdb")

.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("failed to connect");
})

const useraccSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})