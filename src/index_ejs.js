const path = require('path');
const express = require("express");
const Contenedor = require("./class/contenedor");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const dataDirPath = path.resolve(__dirname, '../data/productos.json');
const productos = new Contenedor(dataDirPath);

app.set('views', './views/ejs')
app.set('views engine', 'ejs')

app.get('/', (req, res) => {
    let content = productos.content
    return res.render('index.ejs', {content})
})

app.post("/productos", (req, res) => {
    productos.save(req.body)
    let content = productos.content
    return res.render('productos.ejs', {content});
});

app.get("/productos", (req, res) => {
    let content = productos.content
    return res.render('productos.ejs', {content});
});

app.listen(8080);
