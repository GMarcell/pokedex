import React from 'react'
import '../pages/Home.css'

function PokemonDetails({handleClose}) {
    return (
        <div className='thumb-container'>
            <h3>PokemonDetails</h3>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default PokemonDetails