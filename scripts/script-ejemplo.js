var nombre = "hola";
var texto = "string";
var numerosEnteroPos = 1; // Infinito positivo
var numerosEnteroNeg = -1; // menos infinito negativo
var numerosFlotantesPos = 0.0000001;
var numerosFlotantesNeg = -0.0000001;
var boolean = true; // false

var arreglos = [1, 2, 3, 4, 5];
var arreglos = [1, true, "hola", [5, false]];

var objetos = {
  claveTexto: "texto",
  claveNumero: 1,
  claveBoolean: false,
  claveArreglo: [1, 2, false],
  claveObjeto: {
    clave: 1,
  },
};

// El nombre de una variable solo permite caracteres alfanumericos
// A-Z a-z 0-9 _

// Operadores
//  Texto
// + para juntar texto
// .toUpperCase() => mayusculas
// .toLowerCase() => minuscula
// .split('') => separar letras

//  Numeros
//      +   suma
//      -   Resta
//      *   multiplicacion
//      /   Division
//      %   Residuo
//      +=  suma con igualdad
//      -=  resta con igualdad
//      ++  incremento de uno en uno
//      --  decremento de uno en uno

/**
 * Booleanos
 *      >       Mayor que                               5 > 4           =>   true
 *      <       Menor que                               5 < 4           =>  false
 *      >=      Mayor igual que                         5 >= 5          =>  true
 *      <=      Menor igual que                         5 <= 5          =>  true
 *      ==      Igual que                               5 == '5'        =>  true
 *      ===     Estrictamente igual que                 5 === '5'       =>  false
 *      !=      Difente que                             5 != '5'        =>  false
 *      !==     Estrictamente diferente que             5 !== '5'       =>  true
 *      &&      Y                                       true && true    =>  true
 *                                                      true && false   =>  false
 *                                                      false && true   =>  false
 *                                                      false && false  =>  false
 *      ||      O                                       true || true    =>  true
 *                                                      true || false   =>  true
 *                                                      false || true   =>  true
 *                                                      false || false  =>  false
 *      !       Negación                                !true           =>  false
 *                                                      !false          =>  true
 */
var resultado;
function sumar(valor1, valor2, valor3) {
  var resultado = valor1 + valor2 + valor3;
  return resultado;
}

var restar = function (valor1, valor2, valor3) {
  console.log("Muestrame resultado en resta", resultado);
  resultado = valor1 - valor2 - valor3;
  return resultado;
};

var multiplicar = (valor1, valor2, valor3) => {
  var resultado = valor1 * valor2 * valor3;
  return resultado;
};

var promedio = (valor1, valor2, valor3) => {
  var resultado = sumar(valor1, valor2, valor3) / 3;
  return resultado;
};

/// [11, 12, 10, 9, 6]
const promedioDinamico = (listaNumeros) => {
  let suma = 0;
  const longitud = listaNumeros.length;

  for (let indice = 0; indice < longitud; indice++) {
    suma = suma + listaNumeros[indice];
  }

  const resultado = suma / longitud;

  return resultado;
};

const promedioWhile = (listaNumeros) => {
  let suma = 0;
  const longitud = listaNumeros.length;
  let indice = 0;

  while (indice < longitud) {
    suma = suma + listaNumeros[indice];
    indice++;
  }

  const resultado = suma / longitud;

  return resultado;
};

const promedioFor = (listaNumeros) => {
  let suma = 0;
  const longitud = listaNumeros.length;

  for (const indice in listaNumeros) {
    suma = suma + listaNumeros[indice];
  }

  const resultado = suma / longitud;

  return resultado;
};

const promedioForOf = (listaNumeros) => {
  let suma = 0;
  const longitud = listaNumeros.length;

  for (const numero of listaNumeros) {
    suma = suma + numero;
  }

  const resultado = suma / longitud;

  return resultado;
};

console.log(sumar(1, 2, 3)); // 6
console.log(restar(6, 3, 2)); // 1
console.log(multiplicar(2, 3, 4)); // 24
console.log(promedio(9, 11, 8)); // 9.333

console.log(promedioDinamico([11, 12, 10, 9, 6]));
console.log(promedioWhile([11, 12, 10, 9, 6]));
console.log(promedioFor([11, 12, 10, 9, 6]));
console.log(promedioForOf([11, 12, 10, 9, 6]));
