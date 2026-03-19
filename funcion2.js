// Galería de imágenes interactiva

function changeImage(image) {
    // Se selecciona la imagen principal por su ID y se actualiza su atributo src
    // con la ruta de la miniatura pulsada 
    document.getElementById("mainImage").src = image;
}