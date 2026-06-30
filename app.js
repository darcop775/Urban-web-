document.getElementById('form-opinion').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Capturar lo que escribió el usuario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear el contenedor para la nueva opinión
    const contenedorComentarios = document.getElementById('lista-comentarios');
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario-usuario');

    // Meter los datos dentro del contenedor
    nuevoComentario.innerHTML = `<strong>${nombre}:</strong> <p>${comentario}</p>`;

    // Añadirlo a la web
    contenedorComentarios.appendChild(nuevoComentario);

    // Limpiar el formulario
    document.getElementById('form-opinion').reset();
});
