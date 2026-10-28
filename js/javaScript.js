
const tarjetas = [
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    },
    {
        pregunta: "¿............................................?",
        respuesta: "101010101010101010101010101010101010101010101010"
    },
    {
        pregunta: "¿..............................................?",
        respuesta: "20202020202020202020202020202020202020202022020202020"
    }
];

const textoTarjeta = document.getElementById("textoTarjeta");
const contador = document.getElementById("contador");
const porcentaje = document.getElementById("porcentaje");
const barraRelleno = document.getElementById("barraRelleno");

const botonAnterior = document.getElementById("anterior");
const botonRespuesta = document.getElementById("respuesta");
const botonSiguiente = document.getElementById("siguiente");

let indiceActual = 0;
let mostrandoRespuesta = false;


function mostrarTarjeta() {
    const tarjetaActual = tarjetas[indiceActual];


    if (mostrandoRespuesta) {
        textoTarjeta.textContent = tarjetaActual.respuesta;
        botonRespuesta.textContent = "Ocultar respuesta";
        textoTarjeta.style.fontSize = "15px";
        textoTarjeta.style.fontWeight = "normal";
    } else {
        textoTarjeta.textContent = tarjetaActual.pregunta;
        botonRespuesta.textContent = "Mostrar respuesta";
        textoTarjeta.style.fontSize = "19px";
        textoTarjeta.style.fontWeight = "bold";
    }

    contador.textContent =
        `${indiceActual + 1} de ${tarjetas.length}`;


    const progreso =
        ((indiceActual + 1) / tarjetas.length) * 100;

    porcentaje.textContent = `${Math.round(progreso)}%`;
    barraRelleno.style.width = `${progreso}%`;


    botonAnterior.disabled = indiceActual === 0;
    botonSiguiente.disabled =
        indiceActual === tarjetas.length - 1;
}


botonRespuesta.addEventListener("click", function () {
    mostrandoRespuesta = !mostrandoRespuesta;
    mostrarTarjeta();
});

botonAnterior.addEventListener("click", function () {
    if (indiceActual > 0) {
        indiceActual--;
        mostrandoRespuesta = false;
        mostrarTarjeta();
    }
});

botonSiguiente.addEventListener("click", function () {
    if (indiceActual < tarjetas.length - 1) {
        indiceActual++;
        mostrandoRespuesta = false;
        mostrarTarjeta();
    }
});

mostrarTarjeta();
