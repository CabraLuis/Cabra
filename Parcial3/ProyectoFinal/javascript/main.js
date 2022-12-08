const botonRegistrar = document.getElementById("registrarBtn");
const botonBusqueda = document.getElementById("consultarBtn");
const botonEliminar = document.getElementById("eliminarBtn");
const botonEditar = document.getElementById("editarBtn");
let enviarID = document.getElementById("enviarID");
// Las funciones con parámetros necesité enviarlas con una función flecha, de lo contrario se invocan automáticamente al iniciar el script
document.getElementById("generoBtn").addEventListener("click", () => {
  mostrarModal("Generos");
});
document.getElementById("modosBtn").addEventListener("click", () => {
  mostrarModal("Modos");
});
document.getElementById("todosBtn").addEventListener("click", () => {
  mostrarModal("Todos");
});

// Botones para leer checkboxes
document.getElementById("generoGuardarBtn").addEventListener("click", () => {
  getCheckbox("genero");
});
document.getElementById("modoGuardarBtn").addEventListener("click", () => {
  getCheckbox("modo");
});
document
  .getElementById("generos_todosChk")
  .addEventListener("click", generosTodosCheck);
document
  .getElementById("modos_todosChk")
  .addEventListener("click", modosTodosCheck);

// Botones para operaciones en la DB
botonRegistrar.addEventListener("click", registrar);

botonBusqueda.addEventListener("click", () => {
  enviarID.removeEventListener("click", eliminar);
  enviarID.addEventListener("click", consultar);
  mostrarModal("ID");
});

botonEliminar.addEventListener("click", () => {
  enviarID.removeEventListener("click", consultar);
  enviarID.addEventListener("click", eliminar);
  mostrarModal("ID");
});

botonEditar.addEventListener("click", editar);
botonEditar.disabled = true;

// Mostrar notificaciones
function mostrarNotificacion(tipo) {
  const notificacion = new bootstrap.Toast(document.getElementById(tipo));
  notificacion.show();
}

// Mostrar modales
function mostrarModal(tipo) {
  const modal = new bootstrap.Modal(
    document.getElementById("modal" + tipo),
    "keyboard"
  );
  modal.show();
}

// Marcar todos los checkboxes
function generosTodosCheck() {
  let checkboxes = document.getElementsByName("genero");
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}
function modosTodosCheck() {
  let checkboxes = document.getElementsByName("modo");
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
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
  document.getElementById(name + "ID").value = resultado.slice(0, -1);
}

function actualizarForm() {
  document.getElementById("formulario").reset();
  document.getElementById("busquedaForm").reset();
  botonEditar.disabled = true;
  grid.forceRender();
}

let grid = new gridjs.Grid({
  columns: [
    "ID",
    "Nombre",
    "Año de Salida",
    "Desarrollador",
    "Distribuidor",
    "Clasificación",
    "Generos",
    "Modos",
  ],
  server: {
    url: "/Cabra/Parcial3/ProyectoFinal/php/todos.php",
    then: (data) =>
      data.map((item) => [
        item.id,
        item.nombre,
        item.salida,
        item.desarrollador,
        item.distribuidor,
        item.clasificacion,
        item.generos,
        item.modos,
      ]),
  },
}).render(document.getElementById("datos"));

async function registrar() {
  let datosFormulario = new FormData(document.getElementById("formulario"));
  let respuesta = await fetch("php/insertar.php", {
    method: "POST",
    body: datosFormulario,
  });
  let dato = await respuesta.json();
  if (dato == "Exito") {
    mostrarNotificacion("notificacionRegistrar");
    actualizarForm();
  }
}
// Traer datos de la DB
async function consultar() {
  const valorClasificacion = document.getElementById("idClasificacion");
  let datosFormulario = new FormData(document.getElementById("busquedaForm"));
  let respuesta = await fetch("php/consultar.php", {
    method: "POST",
    body: datosFormulario,
  });
  let dato = await respuesta.json();
  document.getElementById("idJuego").value = dato.id;
  document.getElementById("idNombre").value = dato.nombre;
  document.getElementById("idSalida").value = dato.salida;
  document.getElementById("idDesarrollador").value = dato.desarrollador;
  document.getElementById("idDistribuidor").value = dato.distribuidor;
  document.getElementById("generoID").value = dato.generos;
  document.getElementById("modoID").value = dato.modos;
  switch (dato.clasificacion) {
    case "Todos":
      valorClasificacion.value = "Todos";
      break;
    case "Todos +10":
      valorClasificacion.value = "Todos +10";
      break;
    case "Adolescentes":
      valorClasificacion.value = "Adolescentes";
      break;
    case "Maduro +17":
      valorClasificacion.value = "Maduro +17";
      break;
    case "Adultos unicamente +18":
      valorClasificacion.value = "Adultos únicamente +18";
      break;
    case "Clasificacion pendiente":
      valorClasificacion.value = "Clasificación pendiente";
      break;
    default:
      valorClasificacion.value = "Seleccionar";
  }
  mostrarNotificacion("notificacionConsultar");
  botonEditar.disabled = false;
}

// Eliminar datos de la DB
async function eliminar() {
  let datosFormulario = new FormData(document.getElementById("busquedaForm"));
  let respuesta = await fetch("php/eliminar.php", {
    method: "POST",
    body: datosFormulario,
  });
  let dato = await respuesta.json();

  if (dato == "Exito") {
    mostrarNotificacion("notificacionEliminar");
    actualizarForm();
  }
}

async function editar() {
  let datosFormulario = new FormData(document.getElementById("formulario"));
  let respuesta = await fetch("php/editar.php", {
    method: "POST",
    body: datosFormulario,
  });
  let dato = await respuesta.json();

  if (dato == "Exito") {
    mostrarNotificacion("notificacionEditar");
    actualizarForm();
  }
}
