


let cartas=[]   //[...'🐵🍀🌲🌈🍄🍁🦊🦄🐷🐭']//🐦🐸🐠🐌🦋🌺👄👗🐯


export const resultadoFinaal=(contCartas, cantCartas, intentos,tiempo,modalidadJuego)=>{
    if(modalidadJuego ==='facil' && contCartas===cantCartas.length){
        return `Has ganado la partida en ${intentos} intentos`
    }else  if(tiempo===0 && contCartas===cantCartas.length){
        return `Has ganado la partida en ${intentos} intentos`
    }else if(modalidadJuego==='medio' && tiempo>0 && contCartas===cantCartas.length){
        return `Has ganado el juego en ${intentos} intentos y ${60-tiempo} segundos`
    }else if(modalidadJuego==='dificil' && tiempo>0 && contCartas===cantCartas.length){
        return `Has ganado el juego en ${intentos} intentos y ${90-tiempo} segundos`
    } else if(tiempo===0 && contCartas!==cantCartas.length) {
        return'Has perdido. Se acabo el tiempo.'
    }   
    
}

export const resetearTemp=(tipoJuego)=>{
    let cont=''
    if(tipoJuego==='medio') cont=60

    if(tipoJuego==='dificil') cont=100

    return cont
  }

export const llenarCartas=(valor,tipoJuego)=>{
    if(tipoJuego==='facil') cartas = [...'🐵🍀🌲🌈🍄🍁🦊🦄🐷🐭']//
    if(tipoJuego==='medio') cartas = [...'🐵🍀🌲🌈🍄🍁🦊🦄🐷🐭🐦🐸🐠🐌']//
    if(tipoJuego==='dificil') cartas=[...'🐵🍀🌲🌈🍄🍁🦊🦄🐷🐭🐦🐸🐠🐌🦋🌺👗🐯']//
    let emojiList=[]
    emojiList=mezclarCartas([...cartas,...cartas])
    emojiList=emojiList.map((emoji,i)=>({
        index:i,
        emoji,
        estaVolteado:valor
    }))

    return emojiList
}

export const mezclarCartas =(carta)=>{

    for(let i=carta.length-1;i>0;i--){

        const j = Math.floor(Math.random() * (i+1));

        [carta[i],carta[j]] = [carta[j],carta[i]]
    }

    return carta
}
