'use strict';

var $ = require("../../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js");
window.jQuery = $;

const pokemonCount = 151;
const colourCount = 10;

function randomChoice(items) {
  // random element from array
  return items[Math.floor(Math.random()*items.length)];
}

function randomColour() {
  return 1 + Math.floor(Math.random()*colourCount);
}

class Pokemon {
  constructor(pokemonId, name, spriteUrl, colour, height) {
    this.pokemonId = pokemonId;
    this.name = name;
    this.spriteUrl = spriteUrl;
    this.colour = colour;
    this.heightInDm = height;
    console.log(this);
    this.sync();
  }
  describeHeight() {
    if(this.heightInDm < 5) {
      return "small"
    }
    else{
      if(this.heightInDm > 10) {
        return "large"
      }
      else {
        return "medium-sized"
      }
    }
  }
  sync() {
    console.log('Syncing',this.name);
    $("#pokename").html(this.name);
    $("#pokecolour").html(this.colour);
    $("#pokesize").html(this.describeHeight());
    $("#pokesprite").html('<img alt="' + this.name + '" src="' + this.spriteUrl + '">');
    $("#showshape").css({
      'background': this.colour,
      'height': 10 * this.heightInDm + 'px'
    });
  }
}

function getPokemonByName(pokemonName, colour) {
  $.get("http://pokeapi.co/api/v2/pokemon/"+pokemonName,
    function(pokemonData){
      return new Pokemon(
        pokemonData.id,
        pokemonData.name,
        pokemonData.sprites.front_default,
        colour,
        pokemonData.height
      );
    });
}

function getPokemonByColour(colourId) {
  $.get("http://pokeapi.co/api/v2/pokemon-color/"+colourId,
  function(colourData){
    var pokemons = colourData.pokemon_species;
    var randPokemon = randomChoice(pokemons).name;
    console.log('randPokemon',randPokemon);
    return getPokemonByName(randPokemon, colourData.name);
  });
}

export default class Pokeshapes {
  constructor() {
    this.name = 'pokeshapes';
  }
  tick() {
    getPokemonByColour(randomColour());
  }
  run() {
    this.tick();
    window.setInterval(this.tick, 5*1000);
  }
}
