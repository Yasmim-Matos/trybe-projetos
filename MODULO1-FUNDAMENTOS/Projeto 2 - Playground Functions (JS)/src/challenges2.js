// Desafio 10
function techList(tecnologies, name) {
  // Função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro.
  // Referencia - Fiz essa questão com a ajuda dos meus colegas: Kerli Schroeder, Loris Milloni, Yuri Carvalho
  tecnologies.sort();
  let objetoTechENome = [];
  if (tecnologies.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tecnologies.length; index += 1) {
    objetoTechENome[index] = {
      tech: tecnologies[index],
      name,
    };
  }
  return objetoTechENome;
}

// Desafio 11
// Referencia - Fiz essa questão com a ajuda dos meus colegas: Kerli Schroeder, Loris Milloni, Yuri Carvalho
function generatePhoneNumber(numbers) {
  let telefone = '';
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    let cont = 0;
    for (let index3 = 0; index3 < numbers.length; index3 += 1) {
      if (index2 === numbers[index3]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    telefone = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaLinhaAB = Math.abs(lineA + lineB);
  let somaLinhaAC = Math.abs(lineA + lineC);
  let somaLinhaBC = Math.abs(lineB + lineC);

  let difLinhaAB = Math.abs(lineA - lineB);
  let difLinhaAC = Math.abs(lineA - lineC);
  let difLinhaBC = Math.abs(lineB - lineC);

  if (somaLinhaAB > lineC && lineC > difLinhaAB) {
    return true;
  } if (somaLinhaAC > lineB && lineB > difLinhaAC) {
    return true;
  } if (somaLinhaBC > lineA && lineA > difLinhaBC) {
    return true;
  }
  return false;
}

// Desafio 13
// Source (linhas 50 e 54): https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
// Source (linha 54 - parseInt): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// Source (linha 58 e 60 - variável concatenada com uma string): https://pt.stackoverflow.com/questions/363976/uso-de-variavel-em-javascript
// Referencia - Fiz essa questão com a ajuda dos meus colegas: Kerli Schroeder, Loris Milloni, Yuri Carvalho
function hydrate(bebida) {
  let numBebidas = bebida.replace(/[^1-9]/g, '');

  let somaNumCoposAgua = 0;
  for (let index = 0; index < numBebidas.length; index += 1) {
    somaNumCoposAgua += parseInt(numBebidas[index]);
  }
  if (somaNumCoposAgua === 1) {
    return `${somaNumCoposAgua} copo de água`;
  }
  return `${somaNumCoposAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
