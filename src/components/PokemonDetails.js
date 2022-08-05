import React from 'react'
import '../pages/Home.css'

function PokemonDetails({handleClose, pokemon}) {
  console.log(pokemon.stats);
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
            <h3>Stats</h3>
            <ul>
            {pokemon.stats.map(stat => {
              return (
                <li>
                  <p>
                    {stat.stat.name} : {stat.base_stat}
                  </p>
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