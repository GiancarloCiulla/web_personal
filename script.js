    const hamburguesa = document.getElementById('hamburguesa');
    const menu = document.getElementById('menu');

    hamburguesa.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
// -------------------------FORMULARIO------------------------------
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let valid = true;

    // Validación del nombre
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        valid = false;
    }

    // Validación del correo electrónico
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        valid = false;
    }

    // Validación del teléfono
    const telefono = document.getElementById("telefono").value;
    if (!/^\d{9}$/.test(telefono)) { // Aceptar solo 9 dígitos
        alert("Por favor, ingresa un número de teléfono válido de 9 dígitos, sin espacios ni signos.");
        valid = false;
    }

    // Validación de servicios seleccionados
    const servicios = document.querySelectorAll('input[name="servicio"]:checked');
    if (servicios.length === 0) {
        alert("Por favor, selecciona al menos un servicio.");
        valid = false;
    }

    // Si hay algún error, previene el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});
