//Destructuring arrays

//Destructuring objetos

//Ejemplo de map (devolución de otro array) y diferencia con forEach (procesamiento)

//Spread operator, uso para combinar objetos y arrays

//Uso para copiar sin mutar al ejemplo original (muy útil en React)
const array1 = ["hola", "qué", "tal"]

const array2 = [...array1]

array2.push("cómo estás?")

console.log(array2)

//Uso para copiar el contenido de un objeto y añadir contenido a un objeto nuevo
const objeto1 = {nombre: "Sebas", apellido: "Ancavil"}
const objeto2 = {...objeto1, edad: 32}

console.log(objeto1, objeto2);
