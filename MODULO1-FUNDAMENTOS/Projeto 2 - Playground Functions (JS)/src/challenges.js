/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  // Usando o operador &&
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // Calculando a área de um triângulo
  let resultado = ((base * height) / 2);
  return resultado;
}

// Desafio 3
function splitSentence(phrase) {
  // Array de Strings separadas por espaço (usando o método split)
  // Source do método split = https://blog.betrybe.com/javascript/javascript-split/
  let arrResult = phrase.split(' ');
  return arrResult;
}
// Desafio 4
function concatName(items) {
  // Array que concatene Strings da última para primeira
  // Source do método concat = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  let arrName = items[items.length - 1].concat(', ', items[0]);
  return arrName;

  /* Tentando fazer de outras formas para entender melhor outros métodos
  Source do método shift = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
  Source do método pop = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
  let firstItems = items.shift();
  let lastItems = items.pop();
  let arrName = (lastItems, ',', firstItems); */
  /*
  let firstItems = items[0];
  let lastItems = items[items.length - 1];
  let arrName = (lastItems, ', ', firstItems);
  return arrName;
  */
}

// Desafio 5
function footballPoints(wins, ties) {
  // Calcular a quantidade de pontos no futebol
  let points = (wins * 3) + ties;
  return points;
  /* Tentando fazer de outras formas para entender melhor outros métodos
  let victory = wins * 3;
  let totalPoints = victory + ties;

  return totalPoints;
  */
}

// Desafio 6
function highestCount(qtdMaxNumber) {
  // Retornar a quantidade de vezes que o maior número aparece
  let positionNumber = qtdMaxNumber[0];
  let repeat = 0;
  for (let index = 0; index < qtdMaxNumber.length; index += 1) {
    if (positionNumber < qtdMaxNumber[index]) {
      positionNumber = qtdMaxNumber[index];
    }
  }
  for (let count = 0; count < qtdMaxNumber.length; count += 1) {
    if (positionNumber === qtdMaxNumber[count]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).
  // Source do método Math.abs() (para tornar a distância positiva) = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let calcDistanceCat1 = cat1 - mouse;
  let calcDistanceCat2 = cat2 - mouse;
  let whosClosest;
  if (Math.abs(calcDistanceCat1) < Math.abs(calcDistanceCat2)) {
    whosClosest = 'cat1';
  } else if (Math.abs(calcDistanceCat2) < Math.abs(calcDistanceCat1)) {
    whosClosest = 'cat2';
  } else if (Math.abs(calcDistanceCat1) === Math.abs(calcDistanceCat2)) {
    whosClosest = 'os gatos trombam e o rato foge';
  }
  return whosClosest;
}

// Desafio 8
function fizzBuzz(arrNum) {
  // Faça uma função que receba uma array de números e retorne uma array de strings
  let arrString = [];
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] % 3 === 0 && arrNum[index] % 5 === 0) {
      arrString.push('fizzBuzz');
    } else if (arrNum[index] % 3 === 0) {
      arrString.push('fizz');
    } else if (arrNum[index] % 5 === 0) {
      arrString.push('buzz');
    } else {
      arrString.push('bug!');
    }
  }
  return arrString;
}

// Desafio 9
function encode(letter) {
  // Função encode receberá uma string como parâmetro e deverá trocar todas as vogais minúsculas por números.
  // Source: fiz com a ajuda de alguns colegas pois tinha travado nesse requisito, queria agradecer pela ajuda deles :)
  let transformaParaNum = '';
  for (let index = 0; index < letter.length; index += 1) {
    if (letter[index] === 'a') {
      transformaParaNum += '1';
    } else if (letter[index] === 'e') {
      transformaParaNum += '2';
    } else if (letter[index] === 'i') {
      transformaParaNum += '3';
    } else if (letter[index] === 'o') {
      transformaParaNum += '4';
    } else if (letter[index] === 'u') {
      transformaParaNum += '5';
    } else {
      transformaParaNum += letter[index];
    }
  }
  return transformaParaNum;
}

/* Outra forma de resolver o mesmo requisito.
Source do replace: https://blog.betrybe.com/javascript/javascript-replace/ e https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
let letra = letter;
  for (let index = 0; index < letra.length; index += 1) {
    letra = letra.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4').replace('u', 5);
  }
    return letra;
 }
 */

function decode(number) {
  // Recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números
  let transformaParaLetra = '';
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === '1') {
      transformaParaLetra += 'a';
    } else if (number[index] === '2') {
      transformaParaLetra += 'e';
    } else if (number[index] === '3') {
      transformaParaLetra += 'i';
    } else if (number[index] === '4') {
      transformaParaLetra += 'o';
    } else if (number[index] === '5') {
      transformaParaLetra += 'u';
    } else {
      transformaParaLetra += number[index];
    }
  }
  return transformaParaLetra;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
