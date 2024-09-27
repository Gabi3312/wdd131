// Para la ultima fecha modificada
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


// Activar o desactivar el menú de navegación haciendo clic en la barra (la hamburguesa)
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        // Alternar entre agregar o quitar la clase 'mostrar' para mostrar u ocultar la navegación
        navLinks.classList.toggle("show");

        // Cambia el botón de la barra a 'X' cuando el menú está abierto
        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "&#10005;"; // 'X' symbol
        } else {
            hamburger.innerHTML = "&#9776;"; // simbolo de la barra (la hamburguesa)
        }
    });
});
