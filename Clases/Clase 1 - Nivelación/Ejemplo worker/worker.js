//Obtenemos de la data que nos envía el script principal la data que contiene "cmd"
// el comando y el valor

self.addEventListener('message', e=> {
    console.log("Hola!");
    console.log(e.data)
    const data = e.data;
    switch (data.cmd) {
        case "superCalc":
            console.log("Entro a suma");
            let suma = 0;
            for (let index = 0; index < data.value; index++) {
                suma += index
            }
            //los workers se manejan todo con self
            self.postMessage(suma);
    }
}, false)