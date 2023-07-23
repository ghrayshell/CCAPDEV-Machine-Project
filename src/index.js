const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const viewPath = path.join(__dirname,'../views')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", viewPath)

app.get("/", (req, res) =>{
    res.render("login")
})

app.get("/signup", (req, res) =>{
    res.render("signup")
})

app.listen(3000, () =>{
    console.log("port connected");
})
