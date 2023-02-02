import React, { useState } from 'react'
import '../pages/Home.css'

function PokemonDetails({handleClose, pokemon}) {
  const [showStats, setShowStats] = useState(true)
  const [showAbout, setShowAbout] = useState(false)
  const [showMoves, setShowMoves] = useState(false)
  const style = `details thumb-container ${pokemon.types[0].type.name}`

  const showStatsNumber = (e) => {
    setShowStats(true)
    setShowAbout(false)
    setShowMoves(false)
  }
  const showAboutNumber = (e) => {
    setShowStats(false)
    setShowAbout(true)
    setShowMoves(false)
  }
  const showMovesNumber = (e) => {
    setShowStats(false)
    setShowAbout(false)
    setShowMoves(true)
  }

  return (
    <div className={style} style={{padding: '0.7rem'}}>
      <div style={{display: 'flex', justifyContent: 'end', width: '100%'}}>
        <button style={{fontSize: '25px', background: 'transparent', border: 'none'}} onClick={handleClose}>X</button>
      </div>
      <div id='heading' style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%', paddingLeft: '0.5rem'}}>
        <div id='left'>
          <h3>{pokemon.name}</h3>
          <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
            {pokemon.types.map((element) => {
              return(
                <div className='number'>
                  <small>{element.type.name}</small>
                </div>
              )
            })}
          </div>
        </div>
        <div id='right'>
          <h3>#0{pokemon.id}</h3>
        </div>
      </div>
      <div className='columns'>
        <div>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
        </div>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <button onClick={showAboutNumber} style={{background: 'transparent', border: 'none', fontSize: '20px'}}>
          About
        </button>
        <button onClick={showStatsNumber} style={{background: 'transparent', border: 'none', fontSize: '20px'}}>
          Base Stat
        </button>
        <button onClick={showMovesNumber} style={{background: 'transparent', border: 'none', fontSize: '20px'}}>
          Moves
        </button>
      </div>
      {
        showStats ? 
        <div style={{width: '100%'}}>
          <h3 style={{margin: '0', borderTop: '2px solid black'}}>Stats</h3>
          <div>
            {pokemon.stats.map((stat,index) => {
              return (
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>
                    {stat.stat.name} :
                  </div>
                  <div style={{textAlign: 'right'}}>
                    {stat.base_stat}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        :
        <></>
      }
      {
        showAbout ?
        <div style={{width: '100%'}}>
          <h3 style={{margin: '0', borderTop: '2px solid black'}}>About</h3>
          <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              Species :
            </div>
            <div>
              {pokemon.species.name}
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              Height :
            </div>
            <div>
              {pokemon.height}
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              Weight :
            </div>
            <div>
              {pokemon.weight}
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              Abilities :
            </div>
            <div>
              {pokemon.abilities.map((element) => {
                return (
                  `${element.ability.name} ,`
                )
              })}
            </div>
          </div>
          </div>
        </div>
        :
        <></>
      }
      {
        showMoves ?
        <div style={{width: '100%'}}>
        <h3 style={{margin: '0', borderTop: '2px solid black'}}>Moves</h3>
        <div style={{width: '100%', display: 'flex',flexDirection: 'column', overflowY: 'scroll', height: '20vh'}}>
          <ul style={{columns: '2'}}>
          {pokemon.moves.map((element) => {
            return (
              <li>
                <small>
                  {element.move.name}
                </small>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
        :
        <></>
      }
    </div>
  )
}

export default PokemonDetails