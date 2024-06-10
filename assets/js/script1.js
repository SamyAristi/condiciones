let clickeo = 0;
let imagen = document.querySelector(".imagen");
let n = 0;


function paridad(clickeo) {
    if (clickeo % 2 === 0) {
        return 0;

    } else {
        return 1;
    }
}

imagen.addEventListener("click", () => {
    clickeo++; 
    n = paridad(clickeo);

    if (n === 1) 
        imagen.style.border = '2px solid red';

    else if (n === 0)
        imagen.style.border = ''; 
});



