## 🚀 Lidando com arrays
Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Percorra o array imprimindo todos os valores contidos nele com a função console.log().

Some todos os valores contidos no array e imprima o resultado.

Calcule e imprima a média aritmética dos valores contidos no array.

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

Utilizando for, descubra o maior valor contido no array e imprima-o.

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

Utilizando for, descubra o menor valor contido no array e imprima-o.

Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


## Exercícios - Bônus - Ordenação Bubble Sort

Para realizar os próximos dois exercícios, leia este artigo e tente entender o que está acontecendo no código abaixo:

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

Com base na leitura do artigo, faça os exercícios a seguir.

Ordene o array numbers em ordem crescente e imprima seus valores.
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Ordene o array numbers em ordem decrescente e imprima seus valores.
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Copiar
// resultado esperado:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****
Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****
Agora, inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:
Copiar
n = 5

  *
 ***
*****
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:
Copiar
n = 7

   *   
  * *  
 *   * 
*******
Faça um algoritmo que indique se um número definido em uma variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.