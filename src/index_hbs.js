const express = require("express");
const path = require('path');
const Contenedor = require("./class/contenedor");
const handlebars = require('express-handlebars');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const dataDirPath = path.resolve(__dirname, '../data/productos.json');
const productos = new Contenedor(dataDirPath);
const partialDirPath = path.resolve(__dirname, '../views/partials');

const layoutDirPath = path.resolve(__dirname, '../views/layouts');

//Conseguimos el path absoluto del esqueleto de nuestro HTML (layouts/index.hbs)
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/main.hbs');




app.set('views engine', 'hbs')

app.engine(
    "hbs",
    handlebars.engine({
        extname: 'hbs', 
        partialsDir: partialDirPath,
        layoutsDir: layoutDirPath, 
        defaultLayout: defaultLayerPth, 
        
    })
)

//app.set('views', '/views')

app.get('/', (req, res) => {
    let content = productos.content
    return res.render('hbs/index.hbs', {content})
})

app.post("/productos", (req, res) => {
    productos.save(req.body)
    let content = productos.content
    let boolean = content.length !==0
    return res.render('hbs/productos.hbs', {list: content, showList: boolean});
});

app.get("/productos", (req, res) => {
    let content = productos.content
    let boolean = content.length !==0
    console.log(content);
    return res.render('hbs/productos.hbs', {
        list: content, showList: boolean});
});

app.listen(8080);