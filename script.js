const dataInicio = new Date('2022-03-10T00:00:00');

function atualizarTempo() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    document.getElementById('tempoJuntos').innerHTML = 
        `Tempo Juntos: ${anos} anos, ${meses} meses, ${dias} dias, 
        ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();


// ---- Slide de imagens ----
let index = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].style.display = "block";
    setTimeout(mostrarSlides, 3000);
}

mostrarSlides();
