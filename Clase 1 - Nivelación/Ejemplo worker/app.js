const button = document.getElementById("boton");
const div = document.getElementById("valorLoco");
const input = document.getElementById("valorCalc");

const worker = new Worker('worker.js');

//Agregamos el listener para el button y enviamos el cálculo al worker
button.addEventListener('click', ()=> {
    worker.postMessage({'cmd': 'superCalc', 'value': parseInt(input.value)})
})

//Una vez el worker tiene su respuesta, nos devuelve la data correspondiente
worker.addEventListener('message', e => {
    console.log('Worker dice: ', e.data);
    div.innerHTML += `${e.data}`
}, false)

