const promesa = new Promise((acc, rej) => {
    const aceptor = Math.random();
    //Agregar un setTimeOut
    console.log("Algo dentro de la promise");
    setTimeout(()=> {
        if (aceptor > 0.5) acc("Se resolvió bien la promise");
        else rej("Se rechazó la promise");
    }, 2000)
})

promesa.then(value => console.log(value))
    .catch(value => console.log(value))
    .finally(() => console.log('Termino de correr la promesa'))

console.log("Algo fuera de la promise");