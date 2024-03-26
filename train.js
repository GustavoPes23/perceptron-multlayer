import NeuralNetwork from "./perceptron/NeuralNetwork.js";

//Target 0 - Cão
//Target 1 - Gato

//Input 0 - Peso
//Input 1 - Altura
//Input 2 - Orelha pontuda
//input 3 - Bigode
//Input 4 - Pupila vertical
const neuralNet = new NeuralNetwork(5, 2, 1, 3); // 5 entradas, 2 saídas, 1 camada oculta com 3 neurônios
const trainingData = [
  { inputs: [1, 1, 1, 0, 0], target: 0 }, // Cão
  { inputs: [1, 0, 0, 0, 0], target: 0 }, // Cão
  { inputs: [0, 0, 0, 0, 0], target: 0 }, // Cão
  { inputs: [1, 0, 0, 1, 1], target: 1 }, // Gato
  { inputs: [1, 1, 1, 1, 1], target: 1 }, // Gato
  { inputs: [0, 0, 0, 1, 1], target: 1 }, // Gato
  { inputs: [0, 0, 0, 0, 1], target: 1 }, // Gato
];

const epochs = 1000; // Número de épocas de treinamento
const learningRate = 0.1; // Taxa de aprendizado
neuralNet.train(trainingData, epochs, learningRate);

export { neuralNet as NeuralNet } ;
