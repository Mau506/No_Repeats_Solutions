// detecta-idioma.js

// Función para detectar el idioma del navegador
function detectarIdioma() {
  const idiomaNavegador = navigator.language || navigator.userLanguage;
  // Extraer solo la parte del idioma (ejemplo: 'es' de 'es-ES')
  const idioma = idiomaNavegador.split('-')[0];

  // Aquí puedes definir qué hacer según el idioma detectado
  // Por ejemplo, cambiar textos en la página
  cambiarContenidoPorIdioma(idioma);
}

// Función para cambiar el contenido según el idioma
function cambiarContenidoPorIdioma(idioma) {
  // Ejemplo simple: cambiar el texto del encabezado principal
  const titulo = document.querySelector('h1');
  const subtitulo = document.querySelector('h2');

  if (idioma === 'es') {
    if (titulo) titulo.textContent = 'Hola, soy Mauricio Angulo';
    if (subtitulo) subtitulo.textContent = 'Desarrollo sitios web y brindo mantenimiento virtual a equipos de computo.';
  } else if (idioma === 'en') {
    if (titulo) titulo.textContent = 'Hello, I am Mauricio Angulo';
    if (subtitulo) subtitulo.textContent = 'I develop websites and provide virtual maintenance for computers.';
  } else {
    // Idioma por defecto o para otros idiomas
    if (titulo) titulo.textContent = 'Hola, soy Mauricio Angulo';
    if (subtitulo) subtitulo.textContent = 'Desarrollo sitios web y brindo mantenimiento virtual a equipos de computo.';
  }
}

// Ejecutar la detección cuando cargue la página
window.addEventListener('DOMContentLoaded', detectarIdioma);