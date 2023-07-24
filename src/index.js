const express = require("express")
const path = require("path")
const app = express()

//const hbs = require("hbs")
const collection = require("./mongodb")
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const templatePath = path.join(__dirname,'../templates')
const publicPath = path.join(__dirname, '../public')
const imagesPath = path.join(__dirname, '../images')

console.log(publicPath);
console.log(imagesPath);

app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.static(publicPath))
app.use(express.static(imagesPath))

app.get("/", (req, res) =>{
    res.render("home")
})

app.post("/login",async (req, res)=>{
    try{
        const check = await collection.findOne({cname:req.body.cname})

        if(check.password === req.body.password){
            res.status(201).render("dashboard", { naming: `${req.body.password}+${req.body.cname}` })
        }
        else{[
            res.send("wrong password")
        ]}
    }
    catch(e){
        res.send("wrong details")
    }
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

    const checking = await collection.findOne({cname: req.body.cname})

    try{
        if(checking.cname === req.body.cname && checking.password === req.body.password){
            res.send("user details already exists")
        }
        else{
            await collection.insertMany([data]) 
        }
    }
    catch{
        res.send("wrong inputs")
    }
    
    res.status(201).render("home", {
        naming: req.body.cname
    })
})

app.get("/login", (req, res) =>{
    res.render("login")
})

app.get("/home", (req, res) =>{
    res.render("home")
})

app.get("/blogs", (req, res) =>{
    res.render("blogs")
})

app.get("/contact", (req, res) =>{
    res.render("contact")
})

app.get("/products", (req, res) =>{
    res.render("products")
})

app.get("/about", (req, res) =>{
    res.render("about")
})

app.listen(3000, () =>{
    console.log("port connected");
})
