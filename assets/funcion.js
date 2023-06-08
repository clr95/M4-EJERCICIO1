alert('Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y boleto de embarque. Manténgase atento a los avisos mediante esta plataforma')
    // Obtener elementos de la hora y la fecha
    const hourElement = document.getElementById('Hour');
    const dateElement = document.getElementById('fecha');

    // Función para obtener la hora actual
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    // Función para obtener la fecha actual
    function getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      return `${day}-${month}-${year}`;
    }

    // Actualizar la hora y la fecha en tiempo real
    function updateDateTime() {
      hourElement.textContent = ` ${getCurrentTime()}`;
      dateElement.textContent = ` ${getCurrentDate()}`;
    }

    // Actualizar la hora y la fecha cada segundo
    setInterval(updateDateTime, 1000);

    // Generar un número de vuelo aleatorio
    function generateFlightNumber() {
      return Math.floor(Math.random() * 1000) + 1;
    }

    // Actualizar el número de vuelo y el terminal al refrescar la página
    document.addEventListener('DOMContentLoaded', function() {
      const flightNumberElement = document.getElementById('Number');
      const terminalElement = document.getElementById('Terminal');

      flightNumberElement.textContent = `Número de vuelo: ${generateFlightNumber()}`;
      terminalElement.textContent = `Terminal: ${generateFlightNumber()}`;
    });