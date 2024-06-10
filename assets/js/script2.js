let boton = document.querySelector(".boton");
let carrito = document.querySelector(".carrito");

boton.addEventListener("click", () => {
    let sticker1 = Number(document.querySelector(".personaje-1 input").value);
    let sticker2 = Number(document.querySelector(".personaje-2 input").value);
    let sticker3 = Number(document.querySelector(".personaje-3 input").value);
    let suma = sticker1 + sticker2 + sticker3;


    if (!Number.isInteger(sticker1) || !Number.isInteger(sticker2) || !Number.isInteger(sticker3)) {
        carrito.innerHTML = "Ingresa una cantidad válida";
        carrito.style.color = "rgb(255, 0, 43)";
    }


    else if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0) {
        carrito.innerHTML = "Ingresa una cantidad válida";
        carrito.style.color = "rgb(255, 0, 43)";
    }


    else if (suma == 0) {
        carrito.innerHTML = "No llevas ningún sticker";
        carrito.style.color = "rgb(255, 0, 43)";
    }


    else if (suma == 1) {
        carrito.innerHTML = "Llevas "+suma+" sticker";
        carrito.style.color = "#99ff00";
    }


    else if (suma <= 10) {
        carrito.innerHTML = "Llevas "+suma+" stickers";
        carrito.style.color = "#99ff00";
    }


    else if (suma > 10) {
        carrito.innerHTML = "Llevas demasiados stickers ";
        carrito.style.color = "rgb(255, 0, 43)";
    }


    else {
        carrito.innerHTML = "Ingresa una cantidad válida";
        carrito.style.color = "rgb(255, 0, 43)";
    }
});

