// Desafio 11 - Crie a função generatePhoneNumber
const checkInvalidNumber = (numArray) => {
  for (const number of numArray) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
};

const checkNumberRepetition = (numArray) => {
  const frequency = {};
  for (const number of numArray) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] >= 3) {
      return false;
    }
  }
  return true;
};

const generatePhoneNumber = (num) => {
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkInvalidNumber(num) || !checkNumberRepetition(num)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${num[0]}${num[1]}) ${num.slice(2, 7).join('')}-${num.slice(7).join('')}`;
};

// Desafio 12 -  Crie a função triangleCheck
const findLine = (lineA, lineB, lineC) => {
  const numArray = [lineA, lineB, lineC];
  let biggestLine = lineA;
  for (const number of numArray) {
    if (number > biggestLine) {
      biggestLine = number;
    }
  }
  return biggestLine;
};

const triangleCheck = (lineA, lineB, lineC) => {
  if (findLine(lineA, lineB, lineC) > (lineA + lineB + lineC) - findLine(lineA, lineB, lineC)) {
    return false;
  }
  return true;
};

// Desafio 13 - Crie a função hydrate
const sumArray = (numArray) => {
  let sum = 0;
  for (const number of numArray) {
    sum += number;
  }
  return sum;
};
const hydrate = (string) => {
  let cups = string.match(/\d+/g);
  if (cups.length === 1 && parseInt(cups, 10) === 1) {
    return '1 copo de água';
  }
  return `${sumArray(cups.map((numbers) => parseInt(numbers, 10)))} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
