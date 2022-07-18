import React, { useEffect, useState } from 'react'
import PokemonThumb from '../components/PokemonThumb'
import './Home.css'

function Home() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [searchInput, setSearchInput] = useState("")

  const getAllPokemons = async () => {
    const pokemons = await fetch(loadMore)
    const data = await pokemons.json()

    setLoadMore(data.next)

    function createPokemonObject (result){
      result.forEach(async element => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
        const pokemon = await res.json()
        setAllPokemon(currentList => [...currentList, pokemon])
        allPokemon.sort((a, b) => a.id - b.id)
      });
    }

    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  },[])

  return (
    <div className="App">
      <h1>Pokemon Index</h1>
      <input onChange={(e) => setSearchInput(e.target.value)}></input>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemon.filter(pokemon => {
            if(searchInput === ""){
              return pokemon
            }else if(pokemon.name.toLowerCase().includes(searchInput.toLowerCase())){
              return pokemon
            }
          }).map((pokemon, index) => {
            return(
              <PokemonThumb pokemon={pokemon} key={index}/>
              )
            })}
        </div>
        <button className='load-more'onClick={() => getAllPokemons()}>Load More</button>
      </div>
    </div>
  )
}

export default Home