import React from 'react'
import { llenarCartas, resetearTemp} from './utiles/crearTarjeta'

export const Resultado = ({setContCartas,setIntentos,setBarajarCartas,resultado,tipoJuego,setSegundos,setInicio}) => {

  let cont=resetearTemp(tipoJuego)

    const handleReiniciar=()=>{
        setContCartas(0)
        setIntentos(0)
        setSegundos('')

        const emojiList=llenarCartas(true,tipoJuego)
        setBarajarCartas(emojiList)

        let copia=[...emojiList]
        console.log(tipoJuego)
    
      setTimeout(() => {

        for (let i = 0; i < copia.length; i++) {
            copia[i].estaVolteado=false
        
        } 
        setBarajarCartas(copia)
        setSegundos(cont)
      }, 3000)
    
    }

    const handleInicio=()=>{
      setInicio(true)
    }

  return (
    <>
        <div className='resultado'>
            <p>{resultado}</p>
            <div className='btnFinal'>
              <button onClick={handleReiniciar}>Reiniciar</button>
              <button onClick={handleInicio}>Inicio</button>
            </div>
            
        </div>
    </>
  )
}
