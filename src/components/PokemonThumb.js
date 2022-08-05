import React, { useState } from 'react'
import '../pages/css/Home.css'
import PokemonDetails from './PokemonDetails'

function PokemonThumb({pokemon}) {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopUp = async () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    const containerStyle = `container thumb-container ${pokemon.types[0].type.name}`
    const style = `thumb-container ${pokemon.types[0].type.name}`
    return (
        <div className={containerStyle}>
            <div onClick={togglePopUp}>
                <div className='number'>
                    <small>#0{pokemon.id}</small>
                </div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                <div className='detail-wrapper'>
                    <h3>{pokemon.name}</h3>
                    <small>Type: {pokemon.types[0].type.name}</small>
                </div>
            </div>
            {isOpen && <PokemonDetails handleClose={togglePopUp} pokemon={pokemon}/>}
        </div>
    )
}

export default PokemonThumb