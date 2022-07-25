const express = require("express")
const routes = express.Router()

routes.get( "/", (req, res) => {
    res.render("index")
})

routes.get( "/sobre", (req, res) => {
    res.render("about-page")
})

routes.get( "/cursos", (req, res) => {
    res.render("courses-page")
})

routes.get( "/blog", (req, res) => {
    res.render("blog")
})

module.exports = routes