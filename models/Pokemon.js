const mongoose = require ('mongoose');
const pokemonSchema = new mongoose.Schema({
    name : {type : String , required: true},
    img: {type : String , required: true}
});

const Pokemons =mongoose.model('Pokemons', pokemonSchema);

module.exports = Pokemons;