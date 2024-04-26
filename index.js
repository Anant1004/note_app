const express = require("express")
const app = express()
const path = require("path");
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve("public")))
const fs = require("fs")

app.get("/", function (req, res) {
    fs.readdir("./Files", function (err, files) {
        res.render("index", { files: files })
    })
})

app.post("/create", function (req, res) {
    fs.writeFile(`./Files/${req.body.title.split(' ').join("")}.txt`, req.body.description, function (err, files) {
        res.redirect("/")
    })
})
app.get("/file/:filename", function (req, res) {
    fs.readFile(`./Files/${req.params.filename}`, "utf-8", function (err, filedata) {
        res.render("note", { filename: req.params.filename, filedata: filedata })
    })
})

app.listen(4000, function () {
    console.log("started serer");
})