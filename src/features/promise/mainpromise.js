// Función que crea la promesa
function verificarVocal(cadena) {

    // Retornamos una nueva Promise
    return new Promise(function (resolve, reject) {

        // Eliminamos espacios al inicio y final
        cadena = cadena.trim();

        // Obtenemos la última letra
        let ultimaLetra = cadena.charAt(cadena.length - 1);

        // Convertimos a minúscula para comparar
        let letraMinuscula = ultimaLetra.toLowerCase();

        // Verificamos si es vocal
        if (
            letraMinuscula === "a" ||
            letraMinuscula === "e" ||
            letraMinuscula === "i" ||
            letraMinuscula === "o" ||
            letraMinuscula === "u"
        ) {
            // Si es vocal → resolve
            resolve("Termina en vocal: " + ultimaLetra);
        } else {
            // Si NO es vocal → reject
            reject("El caracter no es una vocal");
        }

    });
}



// Función que se ejecuta cuando presionamos el botón
function verificarCadena() {

    // Tomamos el valor del input
    let texto = document.getElementById("texto").value;

    // Llamamos a la promesa
    verificarVocal(texto)

        // Si la promesa se cumple
        .then(function (resultado) {
            document.getElementById("resultado").innerText = resultado;
        })

        // Si la promesa falla
        .catch(function (error) {
            document.getElementById("resultado").innerText = error;
        });
}
