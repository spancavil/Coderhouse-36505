const promesa = new Promise((acc, rej) => {
    //Agregar un setTimeOut
    const arrayProductos = [{id: 1, desc: "Una descripción", precio: 25.60}]
    setTimeout(()=> {
        acc(arrayProductos);
    }, 3000)
})

promesa.then(value => console.log(value))
    .catch(value => console.log(value))
    .finally(() => console.log('Termino de correr la promesa'))
