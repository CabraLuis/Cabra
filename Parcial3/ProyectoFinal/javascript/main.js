document.getElementById('generoBtn').addEventListener('click', modalGeneros)
document.getElementById('modosBtn').addEventListener('click', modalModos)
document.getElementById('generoGuardarBtn').addEventListener('click', getCheckboxGenero)
document.getElementById('modoGuardarBtn').addEventListener('click', getCheckboxModo)
document.getElementById('consultarBtn').addEventListener('click', consultar)
document.getElementById('registrarBtn').addEventListener('click', notificacionRegistrar)
document.getElementById('todosChk').addEventListener('click', marcarTodos)

function notificacionRegistrar() {
    mostrarNotificacion('notificacionRegistrar');
}

function notificacionConsultar() {
    mostrarNotificacion('notificacionConsultar');
}

function getCheckboxGenero() {
    getCheckbox('genero');
}

function getCheckboxModo() {
    getCheckbox('modo');
}

function modalGeneros() {
    mostrarModal('Generos');
} 

function modalModos() {
    mostrarModal('Modos');
}

function mostrarNotificacion(tipo) {
    const notificacion = new bootstrap.Toast(document.getElementById(tipo));
    notificacion.show()
}

function mostrarModal(tipo) {
    const modal = new bootstrap.Modal(document.getElementById('modal'+tipo), "keyboard");
    modal.show();
}

function getCheckbox(valor) {
    let checkboxes = document.getElementsByName(valor);
    let resultado = " ";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            resultado += checkboxes[i].value + " ";
        }
    }
    /*slice(index inicial, index final) slice(0,-1) es equivalente a slice(0, resultado.length - 1)*/
    document.getElementById(valor + 'ID').value = resultado.slice(0, -1);
}

function marcarTodos() {
    let checkboxes = document.getElementsByName('modo');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked
    }
}

async function consultar() {
    let datosFormulario = new FormData(document.getElementById('formulario'));
    let respuesta = await fetch('php/consultar.php', {
        method: 'POST',
        body: datosFormulario
    })
    let dato = await respuesta.json();
    notificacionConsultar();
    document.getElementById('idJuego').value = dato.id;
    document.getElementById('idNombre').value = dato.nombre;
    document.getElementById('idSalida').value = dato.salida;
    document.getElementById('idDesarrollador').value = dato.desarrollador;
    document.getElementById('idDistribuidor').value = dato.distribuidor;
    document.getElementById('generoID').value = dato.generos;
    document.getElementById('modoID').value = dato.modos;
    let valorClasificacion = document.getElementById('idClasificacion');
    switch (dato.clasificacion) {
        case 'Todos': valorClasificacion.value = 1; break;
        case 'Todos +10': valorClasificacion.value = 2; break;
        case 'Adolescentes': valorClasificacion.value = 3; break;
        case 'Maduro +17': valorClasificacion.value = 4; break;
        case 'Adultos unicamente +18': valorClasificacion.value = 5; break;
        case 'Clasificacion pendiente': valorClasificacion.value = 6; break;
        default: valorClasificacion.value = "Seleccionar"
    }
}