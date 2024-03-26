import Layer from "./Layer.js";
import { activation } from "./utils.js";

// Classe NeuralNetwork representa a rede neural completa
export default class NeuralNetwork {
  constructor(inputsSize, outputsSize, hiddenLayers, neuronsPerHiddenLayer) {
    this.layers = [];

    this.input(inputsSize);

    this.hiddenLayers(hiddenLayers, inputsSize, neuronsPerHiddenLayer);

    this.output(outputsSize, neuronsPerHiddenLayer);
  }

  // Camada de entrada
  input(inputsSize) {
    this.layers.push(new Layer(inputsSize, inputsSize)); // Corrigido para passar o número correto de entradas
  }

  // Camadas ocultas
  hiddenLayers(hiddenLayers, inputsSize, neuronsPerHiddenLayer) {
    for (let i = 0; i < hiddenLayers; i++) {
      this.layers.push(new Layer(neuronsPerHiddenLayer, inputsSize)); // Corrigido para passar o número correto de neurônios na camada anterior
    }
  }

  // Camada de saída
  output(outputsSize, neuronsPerHiddenLayer) {
    this.layers.push(new Layer(outputsSize, neuronsPerHiddenLayer));
  }

  // Ativação da rede neural
  activate(inputs) {
    let outputs = inputs;
    for (let layer of this.layers) {
      outputs = activation(layer.activate(outputs));
    }
    return outputs;
  }

  // Treinamento da rede neural usando backpropagation
  train(trainingData, epochs, learningRate) {
    for (let epoch = 0; epoch < epochs; epoch++) {
      for (let data of trainingData) {
        // Feedforward
        let inputs = data.inputs;
        for (let layer of this.layers) {
          inputs = layer.activate(inputs);
        }

        // Backpropagation
        let expectedOutputs = new Array(data.target).fill(0);
        expectedOutputs[data.target] = 1;

        let prevLayerOutputs = data.inputs;
        for (let layer of this.layers) {
          layer.updateWeights(learningRate, prevLayerOutputs);
          prevLayerOutputs = layer.activate(prevLayerOutputs);
        }
      }
    }
  }
}
