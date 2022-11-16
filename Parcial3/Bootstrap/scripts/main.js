document.getElementById('registrarBtn').addEventListener('click', () => {
    const notificacionRegistrar = new bootstrap.Toast(document.getElementById('notificacionRegistrar'));
    notificacionRegistrar.show()
})

document.getElementById('llenarBtn').addEventListener('click', () => {
    const notificacionLlenar = new bootstrap.Toast(document.getElementById('notificacionLlenar'));
    notificacionLlenar.show()
})

document.getElementById('generoBtn').addEventListener('click', () => {
    const modalGeneros = new bootstrap.Modal(document.getElementById('modalGeneros'), "keyboard");
    modalGeneros.show();
})

document.getElementById('modosBtn').addEventListener('click', () => {
    const modalModos = new bootstrap.Modal(document.getElementById('modalModos'), "keyboard");
    modalModos.show();
})

document.getElementById('generoGuardarBtn').addEventListener('click', getCheckboxGenero)
document.getElementById('modoGuardarBtn').addEventListener('click', getCheckboxModo)

/* Se necesitaron 2 funciones para manejar getCheckbox() porque al enviarse 
por parametros en addEventListener se invocan automaticamente */
function getCheckboxGenero() {
    getCheckbox('genero');
}

function getCheckboxModo() {
    getCheckbox('modo');
}

document.getElementById('todosChk').onclick = function () {
    var checkboxes = document.getElementsByName('modo');
    for(var checkbox of checkboxes){
        checkbox.checked = this.checked
    }
}

function getCheckbox(valor) {
    /*Los checkbox tienen el mismo valor en name y su valor en value*/
    var checkboxes = document.getElementsByName(valor);
    var resultado = " ";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            resultado += checkboxes[i].value + ", ";
        }
    }

    /*slice(index inicial, index final) slice(0,-1) es equivalente a slice(0, resultado.length - 1)*/
    document.getElementById(valor + 'ID').value = resultado.slice(0, -2);
    console.log('click');
}

document.getElementById('llenarBtn').addEventListener('click', function() {
    /* en lugar de registro seria la url del servidor */
    fetch('registro.php')
    .then(respuesta => respuesta.json())
    .then(datojson => {
        console.log(datojson);
        document.getElementById("idJuego").value = datojson.idJuego;
        document.getElementById("idNombre").value = datojson.idNombre;
        document.getElementById("idSalida").value = datojson.idSalida;
    })
})