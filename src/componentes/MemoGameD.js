import React, { useEffect, useState }  from 'react'
import { Header } from './Header'
import { Resultado } from './Resultado'
import { Tablero } from './Tablero'
import { llenarCartas, resultadoFinaal } from './utiles/crearTarjeta'


export const MemoGameD = ({setInicio}) => {

    const tipoJuego='dificil'
    const emojiList=llenarCartas(true,tipoJuego)
    
    const [barajarCartas, setBarajarCartas] = useState(emojiList) 
    const [seleccionado, setSeleccionado] = useState(null)
    const [contCartas, setContCartas] = useState(0)
    const [esperaClick, setEsperaClick] = useState(false)
    const [intentos, setIntentos] = useState(0)
    
    const [segundos, setSegundos] = useState('')

    const resultado=resultadoFinaal(contCartas,barajarCartas,intentos,segundos,tipoJuego)

    useEffect(() => {

        setTimeout(() => {
            setSegundos(100)
        let copia=[...barajarCartas]
    
        for (let i = 0; i < copia.length; i++) {
            copia[i].estaVolteado=false
        
        } 
        setBarajarCartas(copia)
        }, 3000)

    }, [])

    
    const temporizador=()=>{
        
            if(segundos>0 && !resultado){
                setTimeout(() => {
                setSegundos(segundos-1)
                }, 1000)
            }
    
    }

    temporizador()

    const handleClick=(memoCarta)=>{
        
        const cartaEnClick={...memoCarta, estaVolteado:true}//bloque q fue clickeado
        let copiaCartas =[...barajarCartas]

        if(contCartas!==barajarCartas.length && segundos!==0){
            copiaCartas.splice(memoCarta.index,1,cartaEnClick)//en la copia reemplazamos la carta seleccionada por la carta clickeada
            setBarajarCartas(copiaCartas)

            if(seleccionado === null){
            setSeleccionado(memoCarta)
            setIntentos(intentos+1)
            
            }else if(seleccionado.emoji===memoCarta.emoji){
                setSeleccionado(null)
                setContCartas(contCartas+2)
                
            }else{
        
            setEsperaClick(true)
                setTimeout(() => {
                    copiaCartas.splice(memoCarta.index,1,memoCarta)
                    copiaCartas.splice(seleccionado.index,1,seleccionado)
                    setBarajarCartas(copiaCartas)
                    setSeleccionado(null)
                    setEsperaClick(false)
                }, 700);
            }
        }
    }

   

    return (
    <>
    
        <Header intentos={intentos} segundos={segundos}/>   
        <Tablero barajarCartas={barajarCartas} esperaClick={esperaClick} handleClick={handleClick} tipoJuego={tipoJuego} />
        {
            resultado &&
            <Resultado 
            setContCartas={setContCartas} 
            setIntentos={setIntentos}
            setBarajarCartas={setBarajarCartas}
            barajarCartas={barajarCartas}
            resultado={resultado}
            tipoJuego={tipoJuego}
            setSegundos={setSegundos}
            setInicio={setInicio}
            />
            
        }
    
        
    </>
    
    )
}
