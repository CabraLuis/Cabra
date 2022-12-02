document.getElementById("enviar").addEventListener("click", generarpdf);

async function generarpdf() {
  let datosFormulario = new FormData(document.getElementById("formulario"));
  let respuesta = await fetch("/generar.php", {
    method: "POST",
    body: datosFormulario,
  });
  console.log("success");
}
