// script.js

document.addEventListener("DOMContentLoaded", function () {
    const fireworksContainer = document.getElementById("fireworks");

    // Función para generar un color aleatorio en formato RGB.
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // Genera un número aleatorio entre 0 y 255 para el rojo
        const g = Math.floor(Math.random() * 256); // Genera un número aleatorio entre 0 y 255 para el verde
        const b = Math.floor(Math.random() * 256); // Genera un número aleatorio entre 0 y 255 para el azul
        return `rgb(${b}, ${b}, ${r})`; // Devuelve el color en formato RGB
    }

    // Función para crear un fuego artificial con múltiples partículas.
    function createFirework(x, y) {
        const particleCount = 50; // Número de partículas en cada explosión

        // Crear múltiples partículas para cada explosión
        for (let i = 0; i < particleCount; i++) {
            const firework = document.createElement("div");
            firework.classList.add("firework");

            // Posicionamos todas las partículas en el centro del fuego artificial
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;

            // Generamos un color aleatorio para cada partícula.
            firework.style.backgroundColor = getRandomColor();

            // Creamos un ángulo aleatorio para la dirección de la explosión.
            const angle = Math.random() * 360;

            // Generamos una distancia aleatoria para la dispersión de las partículas.
            const distance = Math.random() * 200 + 100;

            // Asignamos las direcciones X e Y a las animaciones del fuego artificial (dirección de la explosión).
            firework.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
            firework.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

            // Añadimos la partícula al contenedor
            fireworksContainer.appendChild(firework);

            // Eliminar el fuego artificial después de 1.5 segundos (duración de la animación).
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }
    }

    // Función para crear los 4 fuegos artificiales en posiciones aleatorias
    function createMultipleFireworks() {
        for (let i = 0; i < 4; i++) {
            // Generamos una posición aleatoria para cada fuego dentro de toda la pantalla
            const xPos = Math.random() * window.innerWidth; // Aleatorio en el ancho de la ventana
            const yPos = Math.random() * window.innerHeight; // Aleatorio en el alto de la ventana

            // Crear el fuego en la posición aleatoria
            createFirework(xPos, yPos);
        }
    }

    // Ejecutar la función createMultipleFireworks cada 2 segundos para generar 4 fuegos artificiales en posiciones aleatorias
    setInterval(createMultipleFireworks, 2000);
});
