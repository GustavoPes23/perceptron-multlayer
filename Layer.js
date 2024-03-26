import Neuron from "./Neuron.js";

export default class Layer {
  constructor(neuronsSize, inputsPerNeuron) {
    this.neurons = new Array(neuronsSize);

    this.initialNeurons(neuronsSize, inputsPerNeuron);
  }

  // Inicialização dos neurônios na camada
  initialNeurons(neuronsSize, inputsPerNeuron) {
    for (let i = 0; i < neuronsSize; i++) {
      this.neurons[i] = new Neuron(inputsPerNeuron);
    }
  }

  // Ativação de todos os neurônios na camada
  activate(inputs) {
    const outputs = [];
    for (let neuron of this.neurons) {
      outputs.push(neuron.activate(inputs));
    }
    return outputs;
  }

  // Atualização dos pesos e vieses dos neurônios na camada durante o treinamento
  updateWeights(learningRate, prevLayerOutputs) {
    for (let neuron of this.neurons) {
      for (let i = 0; i < neuron.weights.length; i++) {
        neuron.weights[i] += learningRate * neuron.delta * prevLayerOutputs[i];
      }
      neuron.bias += learningRate * neuron.delta;
    }
  }

  // Ativação da camada de saída para retornar valores binários (0 ou 1)
  activateOutput(inputs) {
    const outputs = [];
    for (let neuron of this.neurons) {
      outputs.push(neuron.activate(inputs) >= 0.5 ? 1 : 0);
    }
    return outputs;
  }
}
