import { sigmoid } from "./utils.js";

export default class Neuron {
  constructor(inputsSize) {
    this.weights = new Array(inputsSize);
    this.bias = Math.random(); // Inicialização aleatória do viés
    this.delta = 0;

    this.initialWeights(inputsSize);
  }

  initialWeights(inputsSize) {
    for (let i = 0; i < inputsSize; i++) {
      this.weights[i] = Math.random() * 2 - 1; // Pesos variando entre -1 e 1
    }
  }

  // Função de ativação do neurônio
  activate(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    sum += this.bias;
    return sigmoid(sum);
  }

  // Função de cálculo do erro para o backpropagation
  calculateDelta(output, expected) {
    this.delta = (expected - output) * output * (1 - output);
    return this.delta;
  }
}
