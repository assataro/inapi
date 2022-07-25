const path = require("path")
const express = require("express")
const app = express()

const port = process.env.PORT || 8000;

const routesWeb = require("./src/routes/web")

// configs express
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname,'src','public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src','views'))

// rotas web
app.use(routesWeb)

// start server
app.listen(port)