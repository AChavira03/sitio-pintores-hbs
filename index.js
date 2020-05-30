//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiizar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Abdí Chavira',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vangogh', {
        autor : 'Abdí Chavira',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/vinci', (req, res)=>{
    res.render('vinci', {
        autor : 'Abdí Chavira',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci'
    });
});

app.get('/miguelangel', (req, res)=>{
    res.render('miguelangel', {
        autor : 'Abdí Chavira',
        year : new Date().getFullYear(),
        title : 'Miguel Angel',
    });
});
app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor : 'Abdí Chavira',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
    });
});

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});