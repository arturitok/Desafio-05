const express = require("express");
const path = require('path');
const Contenedor = require("./class/contenedor");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const dataDirPath = path.resolve(__dirname, '../data/productos.json');
const productos = new Contenedor(dataDirPath);

app.set('views', './views/pug')
app.set('views engine', 'pug')

app.get('/', (req, res) => {
    let content = productos.content
    return res.render('index.pug', {content})
})

app.post("/productos", (req, res) => {
    productos.save(req.body)
    let content = productos.content
    return res.render('productos.pug', {content});
});

app.get("/productos", (req, res) => {
    let content = productos.content
    return res.render('productos.pug', {content});
});

app.listen(8080);
