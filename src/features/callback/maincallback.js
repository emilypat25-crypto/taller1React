// ACTIVIDAD 3 - CALLBACK CON BÚSQUEDA


// Arrays dados en la actividad

let baseDatos1 = [
    'Canada',
    'EUA',
    'Mexico',
    'Ecuador',
    'Brazil',
    'Argentina',
    'Uruguay'
];

let baseDatos2 = [
    'Japón',
    'Irán',
    'Corea del Sur',
    'Alemania',
    'Croacia',
    'España',
    'Inglaterra'
];


// Función que se ejecuta cuando el país es encontrado
function encontrado(pais) {
    document.getElementById("resultado").innerText =
        pais + " → País encontrado";
}


// Función que busca en la baseDatos2, Recibe el país y un callback

function busquedaBaseDatos2(pais, callback) {

    if (baseDatos2.includes(pais)) {
        // Si lo encuentra en baseDatos2
        callback(pais); // ejecuta la función encontrado
    } else {
        // Si no lo encuentra en ninguna
        document.getElementById("resultado").innerText =
            "Dato no encontrado";
    }
}


// Función principal que busca primero en baseDatos1
// Recibe el país y un callback

function busquedaBaseDatos1(pais, callback) {

    if (baseDatos1.includes(pais)) {
        // Si lo encuentra en baseDatos1
        callback(pais); // ejecuta la función encontrado
    } else {
        // Si no lo encuentra, llama a baseDatos2
        busquedaBaseDatos2(pais, callback);
    }
}

//  Función que se ejecuta desde el botón

function buscarPais() {

    // Capturamos el valor del input
    let paisIngresado = document.getElementById("pais").value;

    // Limpiamos resultado anterior
    document.getElementById("resultado").innerText = "";

    // Llamamos a la búsqueda en baseDatos1
    // y pasamos la función encontrado como callback
    busquedaBaseDatos1(paisIngresado, encontrado);
}
