import React from 'react'
import '../pages/Home.css'

function PokemonDetails({handleClose, pokemon}) {
  console.log(pokemon.abilities);
  const style = `details thumb-container ${pokemon.types[0].type.name}`
  return (
    <div className={style}>
      <h3>PokemonDetails</h3>
      <div className='columns'>
        <div>
          <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
          </div>
          <div>
            <h3>Abilities</h3>
            <ul>
            {pokemon.abilities.map(ability => {
              return (
                <li>
                  {ability.ability.name}
                </li>
                )
              })}
              </ul>
          </div>
      </div>
        <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default PokemonDetails