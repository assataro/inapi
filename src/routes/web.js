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

routes.get( "/curso/reta-final-trt-noite-ao-vivo", (req, res) => {
    res.render("course-page")
})

routes.get( "/login", (req, res) => {
    res.render("login")
})

routes.get( "/cadastrar", (req, res) => {
    res.render("signup")
})

routes.get( "/checkout", (req, res) => {
    res.render("checkout")
})

module.exports = routes