// Función que retorna una promesa
// Simula un proceso que tarda 2 segundos
function obtenerDoble(numero) {

    return new Promise((resolve, reject) => {

        // Simulamos un retraso de 2 segundos
        setTimeout(() => {

            if (!isNaN(numero)) {
                resolve(numero * 2); // Si es número, devuelve el doble
            } else {
                reject("No es un número válido");
            }

        }, 2000); // 2000 milisegundos = 2 segundos

    });

}


// Función asíncrona que usa async/await
async function calcularDoble() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Calculando... ⏳";

    try {

        // Await espera que la promesa se resuelva
        let doble = await obtenerDoble(Number(numero));

        resultado.innerHTML = "El doble es: " + doble;

    } catch (error) {

        resultado.innerHTML = error;

    }

}
