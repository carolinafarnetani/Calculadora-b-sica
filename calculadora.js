/** PADRÃO PARA LEITURA DE ENTRADA */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** PERGUNTA QUE DESEJA FAZER */

rl.question("Digite uma expressão?\n", (value = "") => {
  const splited = value.split(" ");
  const value1 = splited[0];
  const operator = splited[1];
  const value2 = splited[2];
  const value1Inteiro = parseInt(value1);
  const value2Inteiro = parseInt(value2);
  main(value1Inteiro, operator, value2Inteiro);
  rl.close();
});

const sum = (value1, value2) => {
  return value1 + value2;
};
const subtraction = (value1, value2) => {
  return value1 - value2;
};
const multiplication = (value1, value2) => {
  return value1 * value2;
};
const division = (value1, value2) => {
  return value1 / value2;
};
/** FUNÇÃO PRINCIPAL */

const main = (value1 = 0, operator = "", value2 = 0) => {
  let resultOperator = 0;

  switch (operator) {
    case "+":
      resultOperator = sum(value1, value2);
      break;

    case "-":
      resultOperator = subtraction(value1, value2);
      break;

    case "*":
      resultOperator = multiplication(value1, value2);
      break;

    case "/":
      resultOperator = division(value1, value2);
      break;

    default:
      console.log("Você inseriu uma expressão inválida!");
      break;
  }
  console.log(resultOperator);
};
