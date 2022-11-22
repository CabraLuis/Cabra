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
    for (var checkbox of checkboxes) {
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

/* document.getElementById('llenarBtn').addEventListener('click', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-info alert-dismissible w-25 text-center container" role="alert">`,
        `   <div> 
        <label for="idAlerta" class="form-label">Inserte ID</label> 
        <input id="idAlerta" type="text" class="form-control"> 
        </div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      document.getElementById('liveAlertPlaceholder').append(wrapper)
}) */


document.getElementById('llenarBtn').addEventListener('click', async () => {
    var datosFormulario = new FormData(document.getElementById('formulario'));
            let respuesta = await fetch('consultar.php',{
                method: 'POST',
                body: datosFormulario
            })
            let dato = await respuesta.json();
            console.log(dato);
            document.getElementById('idNombre').value = dato[0][1];
            document.getElementById('idSalida').value = dato[0][2];
            document.getElementById('idDesarrollador').value = dato[0][3];
            document.getElementById('idDistribuidor').value = dato[0][4];
            document.getElementById('generoID').value = dato[0][6];
            document.getElementById('modoID').value = dato[0][7];

})