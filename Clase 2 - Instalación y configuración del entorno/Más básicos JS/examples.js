//Spread operator, uso para combinar objetos y arrays
//Uso para copiar sin mutar al ejemplo original (muy útil en React)
const array1 = ["hola", "qué", "tal"]

const array2 = [...array1]

const array3 = array1

array3.push("miércoles")

array2.push("cómo estás?")

// console.log(array2)
// console.log(array1)

//Uso para copiar el contenido de un objeto y añadir contenido a un objeto nuevo
const objeto1 = {nombre: "Sebas", apellido: "Ancavil"}
const objeto2 = {...objeto1, edad: 32}

// console.log(objeto1);
// console.log(objeto2);

//Destructuring arrays

const array4 = [1, "Héctor", false];

// const varA = array4[0]
// const varB = array4[1]

const [varA, varB, varC, varD] = array4 

// console.log(varA, varB, varC, varD);

//Destructuring objetos

const objeto3 = {propiedadA: "soleado", temperatura: 23, humedad: '87%', llueve: false}

// const varE = objeto3.propiedadA;
// const varF = objeto3.temperatura;

let {temperatura: temp} = objeto3;

const {nombre} = objeto3;

objeto3.temperatura = 27

console.log(temp, nombre);

//Ejemplo de map (devolución de otro array) y diferencia con forEach (procesamiento)
const array5 = [1,2,3,4,5,6,7,8,9,10];

const tablaDelSiete = array5.map(elemento => elemento);

console.log(array5);
console.log(tablaDelSiete);



