class Serie {
    id; //number
    url; //string
    name; //string 
    language; //string
    genres; //array de string
    image; //string
    constructor(s_id,s_url, s_name, s_language, s_genres, s_image){
        this.id = s_id;
        this.url = s_url;
        this.name = s_name,
        this.language = s_language;
        this.genres = s_genres;
        this.image = s_image;
    }

    toJsonString() {
        return JSON.stringify({
            id: this.id,
            url: this.url,
            name: this.name,
            language: this.language,
            genres: this.genres,
            image: this.image
        });
    }

    static createFromJsonString(data) {
        return new Serie(
            data.id,
            data.url,
            data.name,
            data.language,
            data.genres,
            data.image.medium
        );
    }

    createHtmlElement() {
        const fila = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = this.name;

        const languageTd = document.createElement('td');
        languageTd.textContent = this.language;

        const genresTd = document.createElement('td');
        genresTd.textContent = this.genres.join(', ');

        const imageTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = `${this.name} image`;
        img.addEventListener('click', () => {
            window.open(this.url, '_blank');
        });
        imageTd.appendChild(img);

        const guardarTd = document.createElement('td');
        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = 'Guardar';
        botonGuardar.classList.add('btn', 'boton');
        botonGuardar.addEventListener('click', () => {
            Serie.guardarSerie(this);
        });
        guardarTd.appendChild(botonGuardar);

        fila.appendChild(nameTd);
        fila.appendChild(languageTd);
        fila.appendChild(genresTd);
        fila.appendChild(imageTd);
        fila.appendChild(guardarTd);

        return fila;
    }

    static guardarSerie(serie) {
        const seriesGuardadas = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
        seriesGuardadas.push(serie);
        localStorage.setItem('seriesGuardadas', JSON.stringify(seriesGuardadas));
        console.log(seriesGuardadas);
        alert(`La serie "${serie.name}" ha sido guardada.`);
    }
}

export default Serie;