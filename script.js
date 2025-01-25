var rectangulo = document.querySelector('.rectangulo-oferta');
var header = document.querySelector('header');

// Función para manejar el desplazamiento
window.onscroll = function() {
    if (window.pageYOffset > 50) {  // Si el usuario hace scroll hacia abajo más de 50px
        rectangulo.style.top = "-30px"; // Desliza el rectángulo fuera de la pantalla
        header.style.top = "0px";      // Mueve el header 50px hacia abajo
    } else {
        rectangulo.style.top = "0";     // Si el usuario sube, vuelve el rectángulo a su lugar
        header.style.top = "30px";         // Vuelve el header a su posición original
    }
};

  document.querySelectorAll('.opcion').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado
  
      // Obtener el destino (el elemento con el id correspondiente)
      const target = document.querySelector(this.getAttribute('href'));
  
      // Posición del destino y posición actual del scroll
      const startPosition = window.pageYOffset; // Posición actual del scroll
      const targetPosition = target.offsetTop; // Posición del destino
      const distance = targetPosition - startPosition - 20; // Distancia entre el punto de inicio y el destino
      const duration = 1000; // Duración de la animación en milisegundos (ajústalo a tu gusto)
      let startTime = null;
  
      // Función de animación que se ejecutará en cada frame
      function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime; // Guardamos el tiempo inicial
  
        const timeElapsed = currentTime - startTime; // Tiempo transcurrido
        const run = easeInOut(timeElapsed, startPosition, distance, duration); // Cálculo de la posición en el tiempo
  
        window.scrollTo(0, run); // Desplazar la ventana
  
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll); // Continuar la animación hasta completar la duración
        }
      }
  
      // Función de easing (función de suavizado) para hacer la animación más natural
      function easeInOut(t, b, c, d) {
        let time = t / (d / 2);
        if (time < 1) return (c / 2) * time * time + b;
        time--;
        return (-c / 2) * (time * (time - 2) - 1) + b;
      }
  
      // Iniciar la animación
      requestAnimationFrame(animateScroll);
    });
  });
