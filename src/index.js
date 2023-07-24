const express = require("express")
const path = require("path")
const app = express()

const hbs = require("hbs")
const collection = require("./mongodb")

const templatePath = path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) =>{
    res.render("login")
})

app.post("/login",async (req, res)=>{
    
})

app.get("/signup", (req, res) =>{
    res.render("signup")
})

app.post("/signup", async (req, res)=>{
    const data ={
        cname:req.body.cname,
        email:req.body.email,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")
})

app.listen(3000, () =>{
    console.log("port connected");
})
