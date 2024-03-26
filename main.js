import { NeuralNet } from "./train.js";
import { DICTIONARY } from "./dictionary.js";

const testInput = [0, 0, 1, 0, 0]; // Cão
const output = DICTIONARY[NeuralNet.activate(testInput)];
console.log(output); // Saída da rede neural após treinamento
