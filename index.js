const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const math = require("./math.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let my_struct = {
 uno:'',
 dos: ''
};

let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

app.get('/', function(req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
});

app.post('https://jalejandrorangel.github.io/modelo_de_creciemiento/add', function (req, res) {
    //console.log(req.body.uno, req.body.dos);
    var suma = math.add(parseInt(req.body.uno), parseInt(req.body.dos));
    respuesta = {
    error: true,
    codigo: "quien sabe",
    mensaje: suma
    };
 res.send(respuesta);
});

app.listen(8080, () => {
 console.log("El servidor está inicializado en el puerto 8080");
});




