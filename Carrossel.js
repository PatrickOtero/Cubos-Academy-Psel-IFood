function solucao(sequencia) {
	let nav = sequencia.split("")
    let val = 0
    
    for (let it of nav) {
        if (it === ">") {
            if (val < 6) {
                val++
            } else {
                val = 0
            }
        } else if (it === "<") {
            if (val > 0) {
                val--
            } else {
                val = 6
            }
        }
    }
    
    console.log (val)

} 