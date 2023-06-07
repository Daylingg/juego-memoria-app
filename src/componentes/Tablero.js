import React from 'react'
import { Tarjetas } from './Tarjetas'
import './styles/tablero.css'


export const Tablero = ({barajarCartas,esperaClick, handleClick, tipoJuego}) => {

    
  return (
    <>{/*div className={(tipoJuego==='facil')?'tablero':(tipoJuego==='medio')?'tableroM':'tableroD'}*/}
        <div className={`tablero ${(tipoJuego==='medio')? 'tableroMedio':(tipoJuego==='dificil')&&'tableroDificil'}`} >
            {
                barajarCartas.map((carta,i)=>
                <Tarjetas key={`${i}_${carta.emoji}`} tipoJuego={tipoJuego}
                carta={carta} 
                esperaClick={esperaClick}  
                handleClick={handleClick} />)
            }
        </div>
    </>
  )
}
