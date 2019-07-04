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
    
    //PUT - Update a register already exists
    modificarPeliculaseries = function(req, res) {
        Pelicula.findById(req.params.id, function(err, peliculaseries) {
            peliculaseries.id = req.body.id;
        
            peliculaseries.titulo = req.body.titulo;

            peliculaseries.fechaEstreno = req.body.fechaEstreno;

            peliculaseries.actores = req.body.actores;

            peliculaseries.cover = req.body.cover;

            peliculaseries.trailer = req.body.trailer;

            peliculaseries.sinopsis = req.body.sinopsis;
            
            peliculaseries.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(peliculaseries);
            });
        });
    }
    
    
    //Rutas de la API, asociadas a una función
    
    app.get('/peliculaseries', findAllPeliculas);
    
    app.post('/peliculaseries', addPelicula);

    app.put('/peliculaseries/:id', modificarPeliculaseries);
    
    }
    
    
    
    module.exports = crudPeliculas;