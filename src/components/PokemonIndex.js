import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const pokeUrl = 'http://localhost:3000/pokemon'


class PokemonPage extends React.Component {

state = {
  pokemon:[],
  search: ""
}

componentDidMount() {
    fetch(pokeUrl)
    .then(res => res.json())
    .then(poke => this.setState({
      pokemon: poke
    }))



}

onSearchChange = (event) => {
  this.setState({
    search: event.target.value

  })
}
showPokemon = () => {
  if (this.state.search === ''){
    return this.state.pokemon

  } else{
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
  }

}
pokeSubmit = (pokemon) => {
  console.log(pokemon);

  fetch(pokeUrl,{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      height: "",
      weight: "",
      name: pokemon.name,
      abilities:[],
      moves: [],
      stats:[{ value: pokemon.hp,
      name: "hp"
      }],
      types: [],
      sprites:{
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    })
  })

}

render() {




    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.showPokemon()} />
        <br />
        <PokemonForm pokeSubmit={this.pokeSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
