document.getElementById('registrarBtn').addEventListener('click', () => {
    const toast = new bootstrap.Toast(document.getElementById('toastRegistrar'));
    toast.show()
})

document.getElementById('generoBtn').addEventListener('click', () => {
    const modalGeneros = new bootstrap.Modal(document.getElementById('modalGeneros'), "keyboard");
    modalGeneros.show();
})

document.getElementById('modosBtn').addEventListener('click', () => {
    const modalModos = new bootstrap.Modal(document.getElementById('modalModos'), "keyboard");
    modalModos.show();
})