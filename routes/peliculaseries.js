const crudPeliculas = (app) => {



    const Pelicula = require('../models/peliculaseries.js');
    
    
    
    //FUNCIONES DE ENDPOINTS
    
    //GET - Devuelve todas las peliculas en la base
    
    findAllPeliculas = (req, res) => {
    
    Pelicula.find((err, peliculas) => {
    
    if(!err){
    
    console.log('GET /peliculaseries')
    
    res.send(peliculas);
    
    }else{
    
    console.log('ERROR: ' + err);
    
    }
    
    });
    
    };
    
    
    
    //POST - Insert a new TVShow in the DB
    
    addPelicula = function(req, res) {
    
    console.log('POST');
    
    console.log(req.body);
    
    
    
    var pelicula = new Pelicula({
    
    id: req.body.id,
    
    titulo: req.body.titulo,

    fechaEstreno: req.body.fechaEstreno,

    actores: req.body.actores,

    cover: req.body.cover,

    trailer: req.body.trailer,

    sinopsis: req.body.sinopsis, 
    
    });
    
    
    
    pelicula.save(function(err) {
    
    if(!err) {
    
    console.log('Created');
    
    } else {
    
    console.log('ERROR: ' + err);
    
    }
    
    });
    
    
    
    res.send(pelicula);
    
    };
    
    
    
    //Rutas de la API, asociadas a una función
    
    app.get('/peliculaseries', findAllPeliculas);
    
    app.post('/peliculaseries', addPelicula);
    
    }
    
    
    
    module.exports = crudPeliculas;