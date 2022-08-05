import React from 'react'
import '../pages/Home.css'

function PokemonDetails({handleClose, pokemon}) {
    return (
        <div className='details'>
            <h3>PokemonDetails</h3>
            <div>
                <h4>{pokemon.name}</h4>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            </div>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default PokemonDetails