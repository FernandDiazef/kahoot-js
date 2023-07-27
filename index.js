const contador = document.querySelector("#contador");
const preguntas = document.querySelector("#preguntas")
const Comensar = document.querySelector("#comensar");
const respuesta1Muestra = document.querySelector(".respuesta1");
const respuesta2Muestra = document.querySelector(".respuesta2");
const respuesta3Muestra = document.querySelector(".respuesta3");
const pantallaRespuesta = document.querySelector("#PantallaRespuesta");
const mostrarFinal = document.querySelector(".mostrarFinal")
const botongg = document.querySelector(".botongg")

let segundos;
let time;
let numero = 0;
let numeroCorrecto = 0;
let numeroIncorrecto = 0;

let RespuestaCorrecta = [0,1,0,2,1]

const result = [
    ["Eucalipto", "Bambues", "Cactus"],
    ["Pedro Infante", "Juan Roget", "Carlos Jinete"],
    [ "Blancanieves y los siete enanitos", "Toy Story", "Bimbo"],
    ["25.000 veces por dia", "25.000 veces por mes", "25.000 veces por semana"],
    ["Josue Lancerio", "Francisco Pizarro", "Lupito Rey"]
]

const arreglos = [
    "¿De qué se alimentan los koalas?",
    "¿Quién inventó el telescopio?",
    "¿Cuál fue la primera película de Walt Disney?",
    "¿Cuántas veces parpadea una persona?",
    "¿Quién descubrió Perú a ojos de Occidente?"
];  
const tiempo = () => {
    segundos = 29;
    contador.innerHTML = 30;
    clearInterval(time)
    time = setInterval(() => {
    contador.classList.add("text-success")
    contador.innerHTML = segundos;
    segundos--;
    if (segundos < 0) {
        numeroIncorrecto++;
        clearInterval(time);
        limpiarColor(); 
        tiempo(); 
        aumentoDeNumeros();
        botones()
    }else if(contador.innerHTML <= 10){
        contador.classList.add("red")
        contador.classList.remove("text-success")
    }
    },1000)
}
Comensar.addEventListener("click", () => {
    botones()
    tiempo()
    botongg.style.display = "none";
    pantallaRespuesta.style.display = "block";
})
const aumentoDeNumeros = () => {
    if(numero < 4){
        clearInterval(time);
      numero++;
    }else{
        clearInterval(time)
        pantallaRespuesta.style.display = "none";
        mostrarFinal.style.display = "block";
        contador.style.display = "none";   
        Comensar.disabled = true;
        valorFinalRespuesta();
    }
}
const botones = () => {
    limpiarColor();
    tiempo();
    respuesta1Muestra.disabled = false;
    respuesta2Muestra.disabled = false;
    respuesta3Muestra.disabled = false;
    preguntas.innerHTML = arreglos[numero];
    respuesta1Muestra.innerHTML = result[numero][0];
    respuesta2Muestra.innerHTML = result[numero][1];
    respuesta3Muestra.innerHTML = result[numero][2];
}
const limpiarColor = () => {
    respuesta1Muestra.classList.remove("greenCorrecto","redIncorrecto");
    respuesta2Muestra.classList.remove("redIncorrecto", "greenCorrecto");
    respuesta3Muestra.classList.remove("greenCorrecto","redIncorrecto");
    respuesta1Muestra.classList.add("styled");
    respuesta2Muestra.classList.add("styled");
    respuesta3Muestra.classList.add("styled");
}
function comprobarRespuesta(Opcion){
    if(Opcion === RespuestaCorrecta[numero]){
            if(Opcion === 0){
                respuesta1Muestra.classList.remove("styled");
                respuesta1Muestra.classList.add("greenCorrecto");
                numeroCorrecto++;
            }else if(Opcion === 1){
                respuesta2Muestra.classList.remove("styled");
                respuesta2Muestra.classList.add("greenCorrecto");
                numeroCorrecto++;
            }else if(Opcion === 2){
                respuesta3Muestra.classList.remove("styled");
                respuesta3Muestra.classList.add("greenCorrecto");
                numeroCorrecto++;
            }
    }else{
            if(Opcion === 0){
                respuesta1Muestra.classList.remove("styled");
                respuesta1Muestra.classList.add("redIncorrecto");
                numeroIncorrecto++;
            }else if(Opcion === 1){
                respuesta2Muestra.classList.remove("styled");
                respuesta2Muestra.classList.add("redIncorrecto");
                numeroIncorrecto++;
            }else if(Opcion === 2){
                respuesta3Muestra.classList.remove("styled");
                respuesta3Muestra.classList.add("redIncorrecto");
                numeroIncorrecto++;
            }
            if(RespuestaCorrecta[numero] === 0){
                respuesta1Muestra.classList.remove("styled");
                respuesta1Muestra.classList.add("greenCorrecto");
            }else if(RespuestaCorrecta[numero] === 1){
                respuesta2Muestra.classList.remove("styled");
                respuesta2Muestra.classList.add("greenCorrecto");
            }else if(RespuestaCorrecta[numero] === 2){
                respuesta3Muestra.classList.remove("styled");
                respuesta3Muestra.classList.add("greenCorrecto");
            }
    }
    if(numero < 4){
        numero++;
        setTimeout(botones, 1000);
    }else {
        setTimeout(aumentoDeNumeros, 1000);
    }
    respuesta1Muestra.disabled = true;
    respuesta2Muestra.disabled = true;
    respuesta3Muestra.disabled = true;
}
const valorFinalRespuesta = () => {
    const correctas = document.querySelector("#Correctas");
    const incorretas = document.querySelector("#Incorrectas");
    correctas.textContent = numeroCorrecto;
    incorretas.textContent = numeroIncorrecto;
}