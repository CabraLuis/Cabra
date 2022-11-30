// Botones para mostrar modales
document.getElementById('generoBtn').addEventListener('click', ()=>{mostrarModal('Generos')});
document.getElementById('modosBtn').addEventListener('click', ()=>{mostrarModal('Modos')});

// Botones para leer checkboxes
document.getElementById('generoGuardarBtn').addEventListener('click', ()=>{getCheckbox(genero)});
document.getElementById('modoGuardarBtn').addEventListener('click', ()=>{getCheckbox(modo)});
document.getElementById('todosChk').addEventListener('click', ()=>{marcarTodosCheck()});

// Botones para operaciones en la DB
document.getElementById('registrarBtn').addEventListener('click', ()=>{registrar()});
document.getElementById('consultarBtn').addEventListener('click', ()=>{consultar()});
document.getElementById('eliminarBtn').addEventListener('click', ()=>{eliminar()});
document.getElementById('editarBtn').addEventListener('click', ()=>{editar()});

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

// Marcar todos los checkboxes de modo
function marcarTodosCheck() {
    let checkboxes = document.getElementsByName('modo');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked
    }
}

// Leer checkboxes
function getCheckbox(valor) {
    let checkboxes = document.getElementsByName(valor);
    let resultado = " ";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            resultado += checkboxes[i].value + " ";
        }
    }
// slice(index inicial, index final) slice(0,-1) es equivalente a slice(0, resultado.length - 1)
    document.getElementById(valor + 'ID').value = resultado.slice(0, -1);
}

// Traer datos de la DB
async function consultar() {
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
    notificacionConsultar();
}