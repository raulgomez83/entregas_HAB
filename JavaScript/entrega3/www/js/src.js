"use strict";
/* 
//////////////////////EJERCICO TRES///////////////////////////////////////////////////////////////////
function palindromo() {
  let frase = prompt("Escribe una frase").toLowerCase();

  frase = frase.replace(/ /g,""); //FUE LA FÓRMULA QUE ENCONTRÉ//

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != frase[frase.length - i - 1]) {
      return false;
    }
  }
  return true;
}

if (palindromo()) {
  console.log("Esto es palíndromo");
} else {
  console.log("Esto no es palíndromo");
}
///////EJERCICIO UNO//////////////////////////////////////////////////////////////////////////////
let frase = prompt("Escribe una frase");

function palabraMasLarga(frase) {
  let palabra = frase.split(" ");
  let resultado = "";

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i].length > resultado.length) {
      resultado = palabra[i];
    }
  }
  return resultado;
}

console.log(palabraMasLarga(frase));
 */

///////////////////EJERCICIO BINARIOS//////////////////////////////////////////////////

let binaryNumber = prompt("Escribe un número binario").split("");
console.log(binaryNumber);

let decimal = 0;
for (let i = binaryNumber.length - 1; i >= 0; i--) {
  if (binaryNumber[i] === "1") {
    decimal += 2 ** i;
  }
}
console.log(decimal);
