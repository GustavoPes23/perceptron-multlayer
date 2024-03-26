// Função de ativação
export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

export function activation(input) {
  return input >= 0 ? 1 : 0;
}
