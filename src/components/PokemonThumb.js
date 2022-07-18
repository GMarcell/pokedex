import React, { useState } from 'react'
import PokemonDetails from './PokemonDetails';

function PokemonThumb({pokemon}) {
    const [isOpen, setIsOpen] = useState(false)
    const [allLocations, setAllLocations] = useState([])

    const togglePopUp = async () => {
        setIsOpen(!isOpen)
        const allLocation = await fetch (`${pokemon.location_area_encounters}/`)
        const data = await allLocation.json()
        data.forEach( element => {
            setAllLocations(currentList => [...currentList, element.location_area.name])
        });
        if(isOpen === false){
            setAllLocations([])
        }
    }

    const containerStyle = `container thumb-container ${pokemon.types[0].type.name}`
    const style = `thumb-container ${pokemon.types[0].type.name}`
    return (
        <div className={containerStyle}>
            <div className={style} onClick={togglePopUp}>
                <div className='number'>
                    <small>#0{pokemon.id}</small>
                </div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                <div className='detail-wrapper'>
                    <h3>{pokemon.name}</h3>
                    <small>Type: {pokemon.types[0].type.name}</small>
                </div>
            </div>
            <div className='details'>
                {isOpen && <PokemonDetails handleClose={togglePopUp} />}
            </div>
        </div>
    )
}

export default PokemonThumb