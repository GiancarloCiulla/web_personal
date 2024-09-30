const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// -------------------------FORMULARIO------------------------------
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let valid = true; // Cambiado a true para validar correctamente
    let mensajeError = "";

    // Validación del nombre
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        mensajeError += "Por favor, ingresa tu nombre.\n";
        valid = false; // Cambiado a false
    }

    // Validación del correo electrónico
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        mensajeError += "Por favor, ingresa un correo electrónico válido.\n";
        valid = false; // Cambiado a false
    }

    // Validación del teléfono
    const telefono = document.getElementById("telefono").value;
    if (!/^\d{9}$/.test(telefono)) {
        mensajeError += "Por favor, ingresa un número de teléfono válido de 9 dígitos, sin espacios ni signos.\n";
        valid = false; // Cambiado a false
    }

    // Validación de servicios seleccionados
    const servicios = document.querySelectorAll('input[name="servicio"]:checked');
    if (servicios.length === 0) {
        mensajeError += "Por favor, selecciona al menos un servicio.\n";
        valid = false; // Cambiado a false
    }

    // Validación del mensaje
    const mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() === "") {
        mensajeError += "Por favor, ingresa tu mensaje.\n";
        valid = false; // Cambiado a false
    }

    // Validación de términos
    const terminos = document.getElementById("terminos").checked;
    if (!terminos) {
        mensajeError += "Debes aceptar los términos y condiciones.\n";
        valid = false; // Cambiado a false
    }

    // Si hay algún error, muestra el mensaje y previene el envío del formulario
    if (!valid) {
        alert(mensajeError);
        event.preventDefault(); // Previene el envío del formulario
    }
});