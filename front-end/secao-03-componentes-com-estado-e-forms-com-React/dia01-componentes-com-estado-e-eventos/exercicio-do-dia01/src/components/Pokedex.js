import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super()

    this.nextPokemonOnList = this.nextPokemonOnList.bind(this)

    this.state = {
      pokedexIndex: 0,
    }
  }

  nextPokemonOnList() {
    this.setState((lastState, _props) => ({
      pokedexIndex: lastState.pokedexIndex + 1
    }))
  }

  render() {
    const { pokedexIndex } = this.state;
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[pokedexIndex] } />
        </div>
        <button onClick={ this.nextPokemonOnList.length }>
          Próximo Pokémon
        </button>
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
