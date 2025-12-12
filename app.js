document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const now = new Date();
    const message = `
        <h1>¡Hola Mundo! 👋</h1>
        <p>Esta es una app web sencilla para la práctica de DevOps con Docker.</p>
        <p>Hora de generación: ${now.toLocaleTimeString()} del ${now.toLocaleDateString()}</p>
    `;
    messageElement.innerHTML = message;
});