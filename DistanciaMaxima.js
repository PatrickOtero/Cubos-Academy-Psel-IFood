/*
Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

Input Format

Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.

A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.

Constraints

2 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000

Output Format

Imprima um único número, a resposta para o problema.

Sample Input 0

3
0 0
0 3
4 0

Sample Output 0

5.0

Sample Input 1

5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7

Sample Output 1

54.141371427033505

CÓDIGO:
*/

function processData(input) {
    
  const newInput = input.trim().split('\n');
  const coords = [];
  let coord = [];
  let maior = 0;

  for (let i = 1; i < newInput.length; i++) {
      
        coord = newInput[i].split(' ');
        coords.push(coord);
      
  }

  for (let a = 0; a < coords.length; a++) {
      
    for (let b = a+1; b < coords.length; b++) {
        
      const catet1 = parseFloat(coords[b][0]) - parseFloat(coords[a][0]);
      const catet2 = parseFloat(coords[b][1]) - parseFloat(coords[a][1]);
        
      const hypo = Math.sqrt(catet1 ** 2 + catet2 ** 2);
        
        if (hypo > maior) {
            
            maior = hypo;
            
        }
    }
  }
    
    console.log(maior); 
    
} 