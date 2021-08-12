function solucao(primeiraLetra, segundaLetra, palavras) {
     
    let nen = false
    
    for (let it of palavras){
        if (it[0] === primeiraLetra && it[1] === segundaLetra) {
           console.log(it)
           nen = true    
        } 
    }
       if (nen === false) {
        console.log ("NENHUMA")
    }
} 