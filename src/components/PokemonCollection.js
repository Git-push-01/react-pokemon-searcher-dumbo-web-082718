import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  pokeCard = () => {
    return this.props.pokemon.map(poke => < PokemonCard poke={poke} key= {poke.id}/> )
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokeCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
