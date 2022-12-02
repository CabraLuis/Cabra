// Las funciones con parámetros necesité enviarlas con una función flecha, de lo contrario se invocan automáticamente al iniciar el script
// Botones para mostrar modales
document.getElementById('generoBtn').addEventListener('click', ()=>{mostrarModal('Generos')});
document.getElementById('modosBtn').addEventListener('click', ()=>{mostrarModal('Modos')});

// Botones para leer checkboxes
document.getElementById('generoGuardarBtn').addEventListener('click', ()=>{getCheckbox('genero')});
document.getElementById('modoGuardarBtn').addEventListener('click', ()=>{getCheckbox('modo')});
document.getElementById('todosChk').addEventListener('click', marcarTodosCheck);

// Botones para operaciones en la DB
// El método del botón registrarBtn se envía mediante POST en la etiqueta <form> del HTML
document.getElementById('registrarBtn').addEventListener('click', ()=>{mostrarNotificacion('notificacionRegistrar')});
document.getElementById('consultarBtn').addEventListener('click', consultar);
document.getElementById('eliminarBtn').addEventListener('click', eliminar);
// document.getElementById('editarBtn').addEventListener('click', ()=>{editar()});

// Mostrar notificaciones
function mostrarNotificacion(tipo) {
    const notificacion = new bootstrap.Toast(document.getElementById(tipo));
    notificacion.show();
}

// Mostrar modales
function mostrarModal(tipo) {
    const modal = new bootstrap.Modal(document.getElementById('modal'+tipo), "keyboard");
    modal.show();
}

// Marcar todos los checkboxes de los modos
function marcarTodosCheck() {
    let checkboxes = document.getElementsByName('modo');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked
    }
}

// Leer checkboxes
function getCheckbox(name) {
    let checkboxes = document.getElementsByName(name);
    let resultado = " ";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            resultado += checkboxes[i].value + " ";
        }
    }
// slice(index inicial, index final) slice(0,-1) es equivalente a slice(0, resultado.length - 1)
    document.getElementById(name+'ID').value = resultado.slice(0, -1);
}

// Traer datos de la DB
async function consultar() {
    const valorClasificacion = document.getElementById('idClasificacion');
    let datosFormulario = new FormData(document.getElementById('formulario'));
    let respuesta = await fetch('php/consultar.php', {
        method: 'POST',
        body: datosFormulario
    })
    let dato = await respuesta.json();
    document.getElementById('idJuego').value = dato.id;
    document.getElementById('idNombre').value = dato.nombre;
    document.getElementById('idSalida').value = dato.salida;
    document.getElementById('idDesarrollador').value = dato.desarrollador;
    document.getElementById('idDistribuidor').value = dato.distribuidor;
    document.getElementById('generoID').value = dato.generos;
    document.getElementById('modoID').value = dato.modos;
    switch (dato.clasificacion) {
        case 'Todos': valorClasificacion.value = 1; break;
        case 'Todos +10': valorClasificacion.value = 2; break;
        case 'Adolescentes': valorClasificacion.value = 3; break;
        case 'Maduro +17': valorClasificacion.value = 4; break;
        case 'Adultos unicamente +18': valorClasificacion.value = 5; break;
        case 'Clasificacion pendiente': valorClasificacion.value = 6; break;
        default: valorClasificacion.value = "Seleccionar"
    }
    mostrarNotificacion('notificacionConsultar');
}

// Eliminar datos de la DB
async function eliminar() {
    let datosFormulario = new FormData(document.getElementById('formulario'));
    let respuesta = await fetch('php/eliminar.php', {
        method: 'POST',
        body: datosFormulario
    })
    console.log('success');
}