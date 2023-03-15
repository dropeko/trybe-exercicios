import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super()

    this.nextPokemonOnList = this.nextPokemonOnList.bind(this)
    this.filterPokemon = this.filterPokemon.bind(this)
    this.fetchFilteredPokemon = this.fetchFilteredPokemon.bind(this)

    this.state = {
      pokedexIndex: 0,
      filteredType: '',
    }
  }

  nextPokemonOnList(numbsOfPokemons) {
    this.setState((lastState, _props) => ({
      pokedexIndex: (lastState.pokedexIndex + 1) % numbsOfPokemons,
    }))
  }

  filterPokemon(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon() {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;
  
    return pokemonList.filter((pokemon) => {
      if (filteredType === '') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokedexIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokedexIndex];
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
        </div>
        <button onClick={ () => this.nextPokemonOnList(filteredPokemon.length) }>
          Próximo Pokémon
        </button>
        <div>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Fire') }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Psychic') }
          >
            Psychic
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
