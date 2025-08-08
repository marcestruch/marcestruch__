document.addEventListener("DOMContentLoaded", () => {
  // Botones con animación al clic
  const botones = document.querySelectorAll(".boton-js");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      boton.classList.add("clic-animado");
      setTimeout(() => {
        boton.classList.remove("clic-animado");
      }, 300);
    });
  });

  // Marcar enlace activo del menú
  const currentPage = window.location.pathname.split("/").pop();
  const enlaces = document.querySelectorAll("nav a");

  enlaces.forEach(enlace => {
    if (enlace.getAttribute("href") === currentPage) {
      enlace.classList.add("activo");
    }
  });
});
// Mostrar / ocultar el menú en móvil
const btnHamburguesa = document.getElementById('btn-hamburguesa');
const menu = document.getElementById('menu');

btnHamburguesa.addEventListener('click', () => {
  menu.classList.toggle('activo');
});

document.addEventListener("DOMContentLoaded", () => {
  const barras = document.querySelectorAll(".relleno");
  barras.forEach(barra => {
    const width = barra.style.width;
    barra.style.width = "0";
    setTimeout(() => {
      barra.style.width = width;
    }, 200);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Campos
    const nombre = form.nombre;
    const email = form.email;
    const mensaje = form.mensaje;

    let valido = true;

    // Limpiar estados previos
    [nombre, email, mensaje].forEach(campo => {
      campo.parentElement.classList.remove("error");
    });

    // Validar nombre
    if (nombre.value.trim() === "") {
      nombre.parentElement.classList.add("error");
      valido = false;
    }

    // Validar email (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.parentElement.classList.add("error");
      valido = false;
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
      mensaje.parentElement.classList.add("error");
      valido = false;
    }

    if (valido) {
      alert("¡Mensaje enviado! Gracias por contactarme.");
      form.reset();
    }
  });
});

// Configura tu User ID de EmailJS (pon tu User ID real)
emailjs.init("wgiH77cjrf_JiC9he");

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const statusDiv = document.getElementById('status');
  statusDiv.textContent = "Enviando...";

  emailjs.send("service_4mt5krp", "template_lvj6axw", {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  })
  .then(function(response) {
    statusDiv.style.color = "lightgreen";
    statusDiv.textContent = "¡Mensaje enviado correctamente!";
    document.getElementById('contact-form').reset();
  }, function(error) {
    statusDiv.style.color = "tomato";
    statusDiv.textContent = "Error al enviar el mensaje, inténtalo de nuevo.";
    console.error('EmailJS error:', error);
  });
});
