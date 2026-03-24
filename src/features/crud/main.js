//Desarrollar el insertar datos, editar, mostrar y eliminar en localStorage

const validateForm = () => { //esta flecha es para indicar que es una función
    let email = document.getElementById("email").value;
    let name = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;
//validar que los campos no esten vacios
    if (email === "" || name === "" || doc === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
//validar que el correo No exista
    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    //validar que el documento solo contenga numeros
    if (isNaN(doc)) { //isNaN significa is Not a Number
        alert("El número de documento solo debe contener números.");
        return false;
    }
    return true;
}
// este comentario es de la función showData que sirve para mostrar los datos en la tabla
function showData() {
    let listData;
    if (localStorage.getItem("listData") === null) {
        listData = [];
    } else {
        listData = JSON.parse(localStorage.getItem("listData"));
    }
    let html = "";
    listData.forEach(function (element, index) {
        html += `<tr>
                <td>${element.email}</td>
                <td>${element.name}</td>
                <td>${element.doc}</td>
                <td>
                <button class="btn-delete" onclick="deleteData(${index})">Eliminar</button>
                <button class="btn-edit" onclick="editData(${index})">Editar</button>
                </td>
                </tr>`;
    });
    document.getElementById("tableData").getElementsByTagName("tbody")[0].innerHTML = html;
}
//create data este es para agregar nuevos registros
//document.onload = showData();

function addData() {
    if (validateForm() == true) {
        let email = document.getElementById("email").value;
        let name = document.getElementById("nombre").value;
        let doc = document.getElementById("documento").value;

        let listData;
        if (localStorage.getItem("listData") == null) {
            listData = [];
        } else {
            listData = JSON.parse(localStorage.getItem("listData"));
        }
        //validar que el correo No exista 
        let emailExistente = false;

        for (let i = 0; i < listData.length; i++) {
            if (listData[i].email === email) {
                emailExistente = true;
                break;
            }
        }
        if (emailExistente) {
            alert("El correo electrónico ya está registrado.");
            return;//detiene la funcion
        }
        // Validar que el documento NO exista
        let docExistente = false;

        for (let i = 0; i < listData.length; i++) {
            if (listData[i].doc === doc) {
                docExistente = true;
                break;
            }
        }

        if (docExistente) {
            alert("Error: Este número de documento ya está registrado.");
            return; // Detiene la función
        }
        listData.push({
            email: email, name: name, doc: doc
        });

        localStorage.setItem("listData", JSON.stringify(listData));
        showData();
        document.getElementById("email").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("documento").value = "";
    }
}
function deleteData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));

    listData.splice(index, 1); // Elimina el elemento en la posición 'index'
    localStorage.setItem("listData", JSON.stringify(listData));
    showData(); //vuelve a mostrar la tabla actualizada 
}
let editIndex = null;

function editData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));

    document.getElementById("nombre").value = listData[index].name;
    document.getElementById("documento").value = listData[index].doc;
    document.getElementById("email").value = listData[index].email;

    editIndex = index;
}

function updateData() {
    if (editIndex === null) {
        alert("Seleccione un registro para editar.");
        return;
    }

    if (validateForm() === true) {
        let listData = JSON.parse(localStorage.getItem("listData"));

        listData[editIndex] = {
            email: document.getElementById("email").value,
            name: document.getElementById("nombre").value,
            doc: document.getElementById("documento").value
        };

        localStorage.setItem("listData", JSON.stringify(listData));
        showData();

        document.getElementById("email").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("documento").value = "";

        editIndex = null;
    }
}

window.onload = showData;


