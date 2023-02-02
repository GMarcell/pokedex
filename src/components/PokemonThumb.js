import React, { useState } from 'react'
import '../pages/Home.css'
import PokemonDetails from './PokemonDetails'

function PokemonThumb({pokemon}) {
  const [abilities, setAbilities] = useState([])

  const [isOpen, setIsOpen] = useState(false)
  const togglePopUp = async () => {
    setIsOpen(!isOpen)
  }

  const containerStyle = `container thumb-container ${pokemon.types[0].type.name}`
  return (
    <div className={containerStyle}>
      <div onClick={togglePopUp} style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className='detail-wrapper'>
            <h3>{pokemon.name}</h3>
          </div>
          {pokemon.types.map((element) => {
            return(
            <div className='number'>
              <small>{element.type.name}</small>
            </div>
            )
          })}
        </div>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
      </div>
      {isOpen && <PokemonDetails handleClose={togglePopUp} pokemon={pokemon}/>}
    </div>
  )
}

export default PokemonThumb