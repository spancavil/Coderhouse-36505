const promesa = new Promise((acc, rej) => {
    const aceptor = Math.random();
    //Agregar un setTimeOut
    if (aceptor > 0.5) acc("Se resolvió bien la promise");
    else rej("Se rechazó la promise");

})

promesa.then(value => console.log(value))
    .catch(value => console.log(value))
    .finally(() => console.log('Termino de correr la promesa'))