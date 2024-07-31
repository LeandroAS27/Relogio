const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const fundo = document.getElementById('container-relogio::after container-relogio::before');

/* Interacao nos Containers (Horas, Minutos e Segundos) */

const fundoHoras = document.getElementById('container-horas');
const fundoMinutos = document.getElementById('container-minutos');
const fundoSegundos = document.getElementById('container-segundos');

fundoHoras.style.background = '#006769'
fundoMinutos.style.background = '#006769'
fundoSegundos.style.background = '#006769'

fundoHoras.addEventListener('click', () => {
    if (fundoHoras.style.backgroundColor === 'rgb(0, 103, 105)') {
        fundoHoras.style.backgroundColor = '#222831'; 
    } else {
        fundoHoras.style.backgroundColor = '#006769';
    }
});

fundoMinutos.addEventListener('click', () => {
    if (fundoMinutos.style.backgroundColor === 'rgb(0, 103, 105)') {
        fundoMinutos.style.backgroundColor = '#222831'; 
    } else {
        fundoMinutos.style.backgroundColor = '#006769';
    }
});

fundoSegundos.addEventListener('click', () => {
    if (fundoSegundos.style.backgroundColor === 'rgb(0, 103, 105)') {
        fundoSegundos.style.backgroundColor = '#222831'; 
    } else {
        fundoSegundos.style.backgroundColor = '#006769';
    }
});


/* Funcao das horas com condicional dependendo se for manha, tarde ou noite vai mudar a cor de fundo da animacao */

const horasAgora = setInterval(function data(){
    const HorasHJ = new Date();
    horasAtual = HorasHJ.getHours();
    minutosAtual = HorasHJ.getMinutes();
    segundosAtual = HorasHJ.getSeconds();

    horas.textContent = horasAtual < 10 ? '0' + horasAtual : horasAtual;
    minutos.textContent = minutosAtual < 10 ? '0' + minutosAtual : minutosAtual;
    segundos.textContent = segundosAtual < 10 ? '0' + segundosAtual : segundosAtual;

    /* horario de manha */
    fundo.style.background = horasAtual <= 12 && horasAtual > 5 ? 'linear-gradient(45deg, #03AED2, #68D2E8, #FDDE55, #FEEFAD)' : 'linear-gradient(45deg, #E76F51, #F4A261, #E9C46A, #36BA98)'

    /* horario da noite */
    fundo.style.background = horasAtual >= 18 && horasAtual < 5 ? 'linear-gradient(45deg, #201E43, #134B70, #508C9B, #EEEEEE)' : 'linear-gradient(45deg, #E76F51, #F4A261, #E9C46A, #36BA98)';

    /* colocando o background atras */
    fundo.style.position = 'relative';
    fundo.style.zIndex = 1;
})
