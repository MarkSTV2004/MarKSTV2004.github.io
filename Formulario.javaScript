function validar(event) {
    event.preventDefault();
    let usuario = document.datos.usuario;
    let correo = document.datos.correo;
    let comentario = document.datos.comentario;
    let errores = document.getElementById('listaErrores');
    errores.innerHTML = "";
    let resenias = document.getElementById('reseñas');
    let hubo_error = false;
    usuario.classList.remove('error');
    correo.classList.remove('error');
    comentario.classList.remove('error');
    let regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let EmailOK= regexEmail.test(correo.value);
    
    if (usuario.value.trim() === "" || usuario.value.trim().length > 30) {
        usuario.classList.add('error');
        let error = document.createElement('p');
        error.innerText = "Debe ingresear un nombre de usuario con un maximo de 30 caracteres";
        errores.appendChild(error);
        hubo_error = true;
    }
    if (!EmailOK) {
        correo.classList.add('error');
        let error = document.createElement('p');
        error.innerText = "Formato de E-mail invalido, corrobore lo ingresado";
        errores.appendChild(error);
        hubo_error = true;
    }

    if (comentario.value.trim() == "") {
        if (comentario.value.trim().length < 10) {
            //alert('tiene menos de 10');
            comentario.classList.add('error');
            let error = document.createElement('p');
            error.innerText = "El comentario debe tener al menos 10 caracteres";
            errores.appendChild(error);
            hubo_error = true;
        }
        if (comentario.value.trim().length > 200) {
            //alert('tiene mas de 200');
            comentario.classList.add('error');
            let error = document.createElement('p');
            error.innerText = "El comentario debe tener 200 caracteres como máximo";
            errores.appendChild(error);
            hubo_error = true;
        }
    }

    if (!hubo_error) {
        let resenia = document.createElement('div');
        resenia.classList.add('resenia');

        let reseniaUsuario = document.createElement('p');
        reseniaUsuario.innerText = 'Usuario: ' + usuario.value;
        resenia.appendChild(reseniaUsuario);

        let reseniaCorreo = document.createElement('p');
        reseniaCorreo.innerText = 'E-mail: ' + correo.value;
        resenia.appendChild(reseniaCorreo);

        if (comentario.value.trim() !== "") {
            let reseniaComentario = document.createElement('p');
            reseniaComentario.innerText = 'Comentario: ' + comentario.value;
            resenia.appendChild(reseniaComentario);
        }
        resenias.appendChild(resenia);
        document.datos.reset();
        usuario.focus();
    }
}