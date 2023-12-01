const dia = document.getElementById('dias');
const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');
const dtEvento = '04 dec 2023';


function countdown(){
    const data = new Date(dtEvento);
    const dtHoje = new Date();

    const segTotal = (data - dtHoje) / 1000;
    const tdia = Math.floor(segTotal / 60 / 60 / 24);
    const thora = Math.floor(segTotal / 60 / 60) % 24;
    const tminuto = Math.floor(segTotal / 60) % 60;
    const tsegundo = Math.floor(segTotal) % 60;

    dia.innerHTML = tdia+'D';
    hora.innerHTML = formatoTempo(thora)+'H';
    minuto.innerHTML = formatoTempo(tminuto)+'M';
    segundo.innerHTML = formatoTempo(tsegundo)+'S';
}

    function formatoTempo(tempo){
        return tempo < 10? `0${tempo}` : tempo
    }

    countdown();

    setInterval(countdown,1000);


    
