# Desafio 05 - Motores de Plantillas
## Motores Utilizados
1. Handlebars: La documentación no es la mejor, se usa la isntaxis de HTML con los tags {{}} loq ue no lo hace un código demasiado elegante al leerl, pero da la ventaja que si no está entre llaves es HTML y si está es HBS, y eso permite separar la parte lógica de la de etiquetado.
2. Pug: Permite un código mas "limpio" una vez que uno se acsotumbra a la sintaxis, la contra es que hay que familiarizarse con ella. Creo que si uno se habitúa es mas fácil de implementar y mantener. 
3. EJS: Al estar habituado al código HTML y ser EJS casi una extensión de este, al principio resulta cómodo,  quizá algunos caacteres hagan difícil de leer el código. Al ser parecido a HTML e incorporar conceptos de JS , la curva de aprendizaje es mas corta y en el caso de trabajar en equipos es posible que haya una base mas amplia de desarrolladores que usen al herramienta. Ademas parece ser mas rápido y permite un debugging bastante sencillo. 

# Conclusión
Elijo PUG, por la sencillez y legibilidad del código, aun a expensas de uan curva de aprendizaje mas larga.

# NOTA
He incluído tres archivos index, uno para cada motor. (index_hbs.js, index_ejs.js e index_pug.js) Pare ejecutar uno u otro hay que modificar el package.json.

   "dev": "nodemon src/index_hbs.js",
   "start": "node src/index_hbs.js"

   "dev": "nodemon src/index_pug.js",
   "start": "node src/index_pug.js"

  "dev": "nodemon src/index_ejs.js",
  "start": "node src/index_ejs.js"
