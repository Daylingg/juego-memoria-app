import React from 'react'
import './styles/header.css'

export const Header = ({intentos,segundos,tipoJuego}) => {
  return (
    <header>
        <div className='inicio titulo'><h2>Memory Game</h2></div>
        {(tipoJuego==='facil')
        ?(<div className='cont-head head'>          
          
          <div className='titulo intentos'>Intentos: <span>{intentos}</span></div>
        </div>)
        :(<div className='cont-head'>          
          <div className='titulo '>Tiempo: <b>{segundos}</b></div>
          <div className='titulo intentos'>Intentos: <span>{intentos}</span></div>
        </div>)
        
        }
    </header>
  )
}
