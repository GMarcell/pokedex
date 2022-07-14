import { useEffect, useState } from 'react';
import './App.css';
import PokemonThumb from './components/PokemonThumb';

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/')

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
      <h1>Pokemon</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemon.map((pokemon, index) => {
            return(
              <PokemonThumb id={pokemon.id} name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default} type={pokemon.types[0].type.name} key={index}/>
            )
          })}
        </div>
        <button className='load-more'onClick={() => getAllPokemons()}>Load More</button>
      </div>
    </div>
  );
}

export default App;
