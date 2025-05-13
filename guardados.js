import Serie from './serie.js';

const tBodyGuardados = document.getElementById('tBodyGuardados');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

let paginaActual = 0;
const filasPorPagina = 6;

function cargarSeriesGuardadas() {
    const seriesGuardadas = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];

    tBodyGuardados.innerHTML = '';

    if (seriesGuardadas.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'No hay series guardadas.';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
        tBodyGuardados.appendChild(row);
        return;
    }

    const inicio = paginaActual * filasPorPagina;
    const fin = inicio + filasPorPagina;
    const seriesPagina = seriesGuardadas.slice(inicio, fin);

    seriesPagina.forEach(serieData => {
        const serie = Serie.createFromJsonString(serieData);
        const fila = serie.createHtmlElement();
        tBodyGuardados.appendChild(fila);
    });
}

function paginaAnterior() {
    if (paginaActual > 0) {
        paginaActual--;
        cargarSeriesGuardadas();
    } else {
        alert('No hay paginas anteriores.');
    }
}

function paginaSiguiente() {
    const seriesGuardadas = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
    if ((paginaActual + 1) * filasPorPagina < seriesGuardadas.length) {
        paginaActual++;
        cargarSeriesGuardadas();
    }
}

// Asignar los métodos a los botones
btnAnterior.addEventListener('click', paginaAnterior);
btnSiguiente.addEventListener('click', paginaSiguiente);

// Cargar las series guardadas al inicio
cargarSeriesGuardadas();