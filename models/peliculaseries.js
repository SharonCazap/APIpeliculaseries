var mongoose = require('mongoose'),

    Schema = mongoose.Schema;



var peliculaSchema = new Schema({

id:{ type: String },

titulo:{ type: String },

fechaEstreno:{ type: String },

actores:{ type: Array },

cover: { type: String },

trailer: { type: String},

sinopsis: { type: String }, 

//comentarios: { type: Array },

});





module.exports = mongoose.model('Peliculaseries', peliculaSchema);