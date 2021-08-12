function solucao(precos) {
    let soma = 0 
    let vip = false
        
        for (let it of precos) {        
            soma += it 
            if (it > 200) {
                vip = true
            }
           }
    
         if (soma > 1000 && vip) {
          console.log ("PREMIUM")
         } else if (soma > 1000 && !vip) {
             console.log ("VIP")
         } else {
               console.log ("NORMAL")      
           }

} 