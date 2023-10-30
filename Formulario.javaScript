
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("formulario").addEventListener("submit",validar)
    const reseña = document.getElementById("reseña");
    const listaErrores = document.getElementById("listaErrores");
    const btnEnviar = document.getElementById("btnEnviar");
    function validar(e){
        e.preventDefault();
        let usuario = document.getElementById("usuario");
        let correo = document.getElementById("correo");
        let comentario = document.getElementById("comentario");
        let errores = [];
        let campo_error = null;
        let formulario = document.getElementById("formulario");
        for (v of formulario.children) 
        {
        v.classList.remove("error");
        }
        if(usuario =="")
        {
            errores.push("Ingrese su nombre de usuario o un nombre con el que se identifique");
            campo_error = usuario;
            usuario.classList.add("error");
        }
    }
});