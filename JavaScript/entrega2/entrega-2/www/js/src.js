"use strict";
/*
function calculator(value1, value2, operation) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else if (operation === "**") {
    return value1 ** value2;
  } else {
    return console.log("ERROR");
  }
}

console.log(calculator(7, 4, "*"));

let numero1 = prompt("introduce un numero");
let signo = prompt("signo");
let numero2 = prompt("introduce otro numero");
let resultado = "";
function calcularora(params) {
  switch (signo) {
    case "+":
      resultado = numero1 + numero2;

      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    case "**":
      resultado = numero1 ** numero2;
      break;

    default:
      console.log("ERROR");

      break;
  }
}

console.log(resultado);
//DADO/ /
//--------------------------------------------------------------//
function dice() {
  return Math.ceil(Math.random() * 6);
}

function tirada() {
  let totalScore = 0;
  for (let i = 1; totalScore < 50; i++) {
    const diceNum = dice();
    totalScore += diceNum;

    if (totalScore < 50) {
      console.log(`Tirada ${i}: ha salido un ${diceNum}. Total ${totalScore}`);
    } else {
      console.log(
        `¡Enhorabuena, ha salido un ${diceNum} ¡Has ganado con un total de ${totalScore} puntos!.`
      );
    }
  }
}
tirada();
//-------------------------------------------------------------------//
//MEDIA//

const Maria = [62, 34, 55];
const Paula = [35, 60, 59];
const Rebeca = [40, 39, 63];

function media(arrayTeam) {
  let totalScore = 0;
  for (let i = 0; i < arrayTeam.length; i++) {
    totalScore += arrayTeam[i];
  }
  return totalScore / arrayTeam.length;
}
const mediaMaria = media(Maria);
const mediaPaula = media(Paula);
const mediaRebeca = media(Rebeca);

if (mediaRebeca > mediaRebeca && mediaPaula > mediaMaria) {
  console.log(
    `El equipo de Rebeca tiene la media más alta con un total de ${mediaRebeca} puntos`
  );
} else if (mediaPaula > mediaPaula && mediaMaria > mediaMaria) {
  console.log(
    `El equipo de Rebeca tiene la media más alta con un total de ${mediaPaula} puntos`
  );
} else {
  console.log(
    `El equipo de Maria tiene la media más alta con un total de ${mediaMaria} puntos`
  );
}
*/
