import React from 'react'
import './styles/tarjeta.css'

export const Tarjetas = ({tipoJuego,carta,esperaClick, handleClick}) => {

  const handleClickCarta=()=>{

    if(!carta.estaVolteado && !esperaClick)  handleClick(carta)
  }

  return (
    <>
    <div className='cont-carta' onClick={handleClickCarta}>
      <div className={`inner ${carta.estaVolteado && 'volteada'}`}>
        <div className={`cartas ${(tipoJuego==='dificil')? 'front frontD' : (tipoJuego==='medio')? 'front frontM' : 'front'} `}>?</div>

        <div className={`cartas ${(tipoJuego==='dificil')? 'icono iconoD' : (tipoJuego==='medio')? 'icono iconoM' :'icono'} `}>
          {carta.emoji}
        </div>
      </div>
        

    </div>
        
    </>
  )
}
