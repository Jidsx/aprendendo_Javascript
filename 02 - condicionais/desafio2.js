/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorGastoE = litrosConsumidos * precoEtanol;

const valorGastoG = litrosConsumidos * precoGasolina;

if (tipoCombustivel === 'Etanol') {
  console.log('O valor gasto em Etanol para essa viagem: ' + valorGastoE.toFixed(2));
} 

else {
  console.log('O valor gasto em Gasolina para essa viagem: ' + valorGastoG.toFixed(2));
}