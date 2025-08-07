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
