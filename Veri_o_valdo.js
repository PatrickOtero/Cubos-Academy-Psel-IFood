function solucao(obras) {
	let obr = ""
    let prec = 0
    
    for (let it of obras) {
        if (it.valor > prec) {
            prec = it.valor
            obr = it.nome
        }
    }
    console.log (obr)
    
}  