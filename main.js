import Serie from './serie.js';
const tBody = document.getElementById('tBody');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

let paginaActual = 0;

function cargarSeries(pagina) {
    tBody.innerHTML = '';
    const min = pagina * 6 + 1;
    const max = min + 6;

    for (let i = min; i < max; i++) {
        const url = 'https://api.tvmaze.com/shows/' + i;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const serie = Serie.createFromJsonString(data);
                const filas = serie.createHtmlElement();
                tBody.appendChild(filas);
            })
            .catch(error => {
                console.error('Error en la petición', error);
                alert('🛑¡ERROR!🛑\n\nNo se encontro la serie o es posible que no se encuentre disponible.\n\nVuelva a intentarlo en otro momento🤔');
            });
    }
}

function paginaSiguiente() {
    paginaActual++;
    cargarSeries(paginaActual);
}

function paginaAnterior() {
    if (paginaActual > 0) {
        paginaActual--;
        cargarSeries(paginaActual);
    } else {
        alert('No hay paginas anteriores.');
    }
}

// Asignar los métodos a los botones
btnSiguiente.addEventListener('click', paginaSiguiente);
btnAnterior.addEventListener('click', paginaAnterior);

// Cargar la tabla
cargarSeries(paginaActual);
