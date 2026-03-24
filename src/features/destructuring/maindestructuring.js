// Creamos el objeto persona
const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};


// Función que usa destructuring
function mostrarDatos() {

    // Aquí usamos destructuring
    // Extraemos solo las propiedades que necesitamos
    const { name, age, profession } = person;

    // Mostramos el resultado en pantalla
    document.getElementById("resultado").innerHTML =
        "Nombre: " + name + "<br>" +
        "Edad: " + age + "<br>" +
        "Profesión: " + profession;

}
