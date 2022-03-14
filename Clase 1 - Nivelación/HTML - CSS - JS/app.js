//Agregar algunos personajes más
/* 
Otro comentario
*/
const personajes = ["Singed", "Maestro Yi", "Teemo", "Malphite", "Nautilus", "Vi"]
let personajes2 = null;
/* Tipos de variables primitivas
string: cadena de caracteres
number: números (entero o float)
boolean: true o false
null: no tiene contenido
undefined: no tiene contenido definida, no existe
 */

// console.log(personajes2);

const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const search = document.getElementById("search");
const list = document.getElementById("list");

console.log(showButton);

showButton.addEventListener('click', ()=> {
    let text = ``
    for (const personaje of personajes) {
        console.log(personaje);
        text += `<li>${personaje}</li>`;
    }
    list.innerHTML = text;
})

//Faltaría ocultar personajes
hideButton.addEventListener('click', ()=> {
    list.innerHTML = "";
})

//Y mostrar sólo los filtrados
search.addEventListener('keyup', (evento)=> {
    console.log(evento.target.value);
    const busqueda = evento.target.value;
    const personajesFiltrados = personajes.filter(personaje => personaje.toLowerCase().includes(busqueda.toLowerCase()))
    console.log(personajesFiltrados);
    let text = ``
    for (const personaje of personajesFiltrados) {
        console.log(personaje);
        text += `<li>${personaje}</li>`;
    }
    list.innerHTML = text;
})