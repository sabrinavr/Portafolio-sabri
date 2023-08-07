const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");
const error = document.getElementById("input-message-error");

const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validarFormulario (event) {
    if (nombre.value === ''){
        alert('Ingresa tu nombre');
        event.preventDefault();
        return;
    }

    if (email.value === ''){
        alert('Ingresa tu correo electrónico');
        event.preventDefault();
        return;
    }

    if (!correoRegex.test(email.value)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    if(asunto.value === ''){
        alert('Cuéntanos qué necesitas');
        event.preventDefault();
        return;
    }
}

formulario.addEventListener('submit', validarFormulario);