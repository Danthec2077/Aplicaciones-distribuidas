var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/aleatorio", async function (request, response) {
	const numero = Math.floor(Math.random()*100)+1;
    r ={
      'message':numero
    };
	response.json(r);
});


app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
