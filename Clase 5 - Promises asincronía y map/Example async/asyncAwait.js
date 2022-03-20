(async () => {

    const promesa = new Promise((acc, rej) => {
        const aceptor = Math.random();
        //Agregar un setTimeOut
        setTimeout(() => {
            if (aceptor > 0.5) acc("Se resolvió bien la promise");
            else rej("Se rechazó la promise");
        }, 3000)
    })

    //En este punto se debe agregar un bloque try-catch
    const respuesta = await promesa;
    console.log(respuesta)

})()


