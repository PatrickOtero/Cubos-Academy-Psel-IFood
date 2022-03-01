*/
Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM, caso ninguém tenha sido sorteado(a).

Input Format

A entrada será sempre um vetor de objetos chamado jogadores, em que cada objeto é uma pessoa, com o seguinte formato:

{
    nome: "Herbert",
    jogada: 0 //será sempre 0 ou 1
}
Constraints

Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.

Output Format

Imprima na tela o nome do jogador que foi sorteado.

Sample Input 0

[
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
]
Sample Output 0

Herman

CÓDIGO:
*/

function solucao(jogadores) {
    
    let zero = 0;
    let one = 0;
    let player;
    
    for (let num of jogadores) {
        
        if (num.jogada === 0) {
            zero++;
        }
        
        if (num.jogada === 1) {
            one++;
        }
        
        if (zero === 1) {
          player = jogadores.find(x => {
              
               if (x.jogada === 0) {
                   return x;
               }
           })
        }
            
        if (one === 1) {
                
          player = jogadores.find(x => {
              
             if (x.jogada === 1) {
                return x;
             }
          })
                
        }
        
    }
    
    if (zero === 1 || one === 1) {
        console.log (player.nome);
    } else {
        console.log ("NINGUEM");
    }
  
}