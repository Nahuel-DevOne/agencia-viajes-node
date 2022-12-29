// CommonJS
// const express = require('express');
// ES6, type module
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));
    

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Definir la carpeta public
app.use(express.static('public'));

// Agregando Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})



