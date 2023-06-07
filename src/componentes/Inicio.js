import React from 'react'
import '../componentes/styles/inicio.css'

export const Inicio = ({setInicio,setFacil, setMedio, setDificil}) => {

    const handleFacil=()=>{
        setInicio(false)
        setFacil(true)
        setMedio(false)
        setDificil(false)
    }

    const handleMedio=()=>{ 
        setInicio(false)
        setMedio(true)
        setFacil(false)
        setDificil(false)
    } 

    const handleDificil=()=>{
        setInicio(false)
        setDificil(true)
        setMedio(false)
        setFacil(false)
    }

  return (
    <>
        <div className='inicioG'>
            <div className='inicioCont'>
                <h1>Juego de Memoria</h1>
                <div className='inicioB'>
                    <button onClick={handleFacil} >Facil</button>
                    <button onClick={handleMedio}>Medio</button>
                    <button onClick={handleDificil}>Dificil</button>
                </div>
            </div>
            
        </div>
    </>
  )
}
