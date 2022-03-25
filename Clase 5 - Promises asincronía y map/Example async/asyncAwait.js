//Funcion IIFE
(async () => {

    const obtenerProductos = new Promise((acc, rej) => {
        const aceptor = Math.random()
        //Agregar un setTimeOut
        setTimeout(() => {
            if (aceptor > 0.5) acc("Se resolvió bien la promise");
            else rej("Se rechazó la promise");
        }, 1000)
    })

    //En este punto se debe agregar un bloque try-catch
    try {
        const respuesta = await obtenerProductos;
        console.log(respuesta)
        
    } catch (error) {
        console.log(error)
    }
    console.log("Hola!")
})()


