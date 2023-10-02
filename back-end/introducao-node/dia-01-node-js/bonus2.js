const bonusFunction = async (first, second, third) => {
  if (typeof first !== 'number' || typeof second !== 'number' || typeof third !== 'number') {
    throw new Error('Informe apenas números');
  }
  const result = (first + second) * third;
  if (result < 50) {
    throw new Error('Valor muito baixo');
  }

  resolve(result);
};