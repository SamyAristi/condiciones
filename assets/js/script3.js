let n = 0;
let m = 0;


function desbloquearIcono(icono) {
    icono.classList.remove('fa-lock');
    icono.classList.add('fa-lock-open');
}


function contrasena() {
    let valor1 = document.getElementById('select1').value;
    let valor2 = document.getElementById('select2').value;
    let valor3 = document.getElementById('select3').value;
    let password = valor1 + valor2 + valor3; 
    let resultado = document.getElementById('resultado');
    let imagen = document.getElementById('imagen');

    if (password === '911') { 
        resultado.innerHTML = "password 1 correcto";
        n = 1;
        resultado.style.color = "#99ff00";
        imagen.alt = "Correcto";
        desbloquearIcono(icono1);

    } else if (password === '714') { 
        resultado.innerHTML = "password 2 correcto";
        m = 1;
        resultado.style.color = "#99ff00";
        desbloquearIcono(icono2);

    } else { 
        resultado.innerHTML = "password incorrecto";
        resultado.style.color = "rgb(255, 0, 43)";
        imagen.alt = "Incorrecto";
    }

    if (n == 1 && m == 1) {
        imagen.src = "./assets/img/puertaabierta.png";
    }
}

document.getElementById('ingresar').addEventListener('click', contrasena);
