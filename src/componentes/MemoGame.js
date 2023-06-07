import React, { useState } from 'react'
import { Inicio } from './Inicio'
import { MemoGameD } from './MemoGameD'
import { MemoGameF } from './MemoGameF'
import { MemoGameN } from './MemoGameN'

export const MemoGame = () => {
    const [inicio, setInicio] = useState(true)
    const [facil, setFacil] = useState(false)
    const [medio, setMedio] = useState(false)
    const [dificil, setDificil] = useState(false)

  return (
    <>
        {
        inicio ?( <Inicio setInicio={setInicio}
          setFacil={setFacil}
          setMedio={setMedio}
          setDificil={setDificil}
        />)
        :facil ?<MemoGameF facil={facil} setInicio={setInicio}/>
        :medio ? <MemoGameN medio={medio} setInicio={setInicio}/> : <MemoGameD setInicio={setInicio}/>
        }
    </>
  )
}
