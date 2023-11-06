var imagenes = 
[
    'fotos/imgCarusel1.jpg',
    'fotos/imgCarusel2.jpg',
    'fotos/imgCarusel3.jpg',
    'fotos/imgCarusel4.jpeg',
    'fotos/imgCarusel5.jpeg',
    'fotos/imgCarusel6.jpeg',
    'fotos/imgCarusel7.jpeg'
];
var cont = 0;
function carusel(contenedorCarusel){
    contenedorCarusel.addEventListener('click', e =>{
        let retroceder = contenedorCarusel.querySelector('.btnRetroceder')
        let avanzar = contenedorCarusel.querySelector('.btnAvanzar')
        let img = contenedorCarusel.querySelector('img')
        let tgt = e.target;

        if (tgt == retroceder) 
        {
            if (cont > 0) 
            {
                img.src = imagenes[cont - 1];
                cont--;
            }
            else 
            {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } 
        else if(tgt == avanzar)
        {
            if (cont < imagenes.length - 1) 
            {
                img.src = imagenes[cont + 1];
                cont++;
            }
            else 
            {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
};
document.addEventListener("DOMContentLoaded",() =>{
    let contenedor = document.querySelector('.contenedorCarusel');
    carusel(contenedor);
});
