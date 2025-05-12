import Serie from './serie.js';

const tBodyGuardados = document.getElementById('tBodyGuardados');

function cargarSeriesGuardadas() {
    const seriesGuardadas = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];

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

    seriesGuardadas.forEach(serieData => {
        const serie = Serie.createFromJsonString(serieData);
        const fila = serie.createHtmlElement();
        tBodyGuardados.appendChild(fila);
    });
}

// Cargar las series guardadas al cargar la página
cargarSeriesGuardadas();