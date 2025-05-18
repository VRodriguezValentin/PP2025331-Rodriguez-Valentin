# 🎬 Proyecto Web - Visualización y Gestión de Series

Este proyecto tiene como objetivo el consumo de datos desde una API externa, su procesamiento mediante clases en JavaScript, y su representación visual a través de HTML y CSS (sin Bootstrap). Además, se implementa almacenamiento local de datos utilizando LocalStorage.

---

## 📁 Enunciado y Requisitos

### 📌 1. Base del proyecto

Utilizar la plantilla de parcial proporcionada:  
🔗 [Plantilla OnlineGDB](https://onlinegdb.com/5u2Tbhqth)

---

### 🎨 2. Estilos con CSS y Media Queries (3 pts)

✅ **Sin Bootstrap**.  
Se deben aplicar los siguientes estilos:

- 🧱 El elemento `<main>` debe funcionar como una grilla de **2 filas y 2 columnas**:
  - `header` → ocupa la **primera fila**.
  - `nav` → ocupa la **primera columna** de la segunda fila.
  - `#principal` → ocupa la **segunda columna** de la segunda fila.

- 📱 El `div` con `id="series"` debe:
  - Tener **4 columnas** por fila en pantallas grandes.
  - Pasar a **2 columnas** cuando el ancho sea menor a `900px`.
  - Pasar a **1 columna** cuando el ancho sea menor a `550px`.

---

### 📦 3. Clase `Serie` en `serie.js` (3 pts)

Crear una clase `Serie` con:

#### 🧱 Atributos:
- `id: number`
- `url: string`
- `name: string`
- `language: string`
- `genres: string[]`
- `image: string`

#### 🛠️ Métodos:
- `constructor()`: inicializa todos los atributos.
- `toJsonString()` → instancia: devuelve un JSON `string` del objeto.
- `createFromJsonString(json)` → estático: devuelve una instancia desde un `string`.
- `createHtmlElement()` → instancia: devuelve un **elemento HTML** que muestra `name`, `language`, `genres` e `image`.

---

### 🧠 4. Lógica en `main.js` (3 pts)

- Al cargar la página, usar `fetch` para obtener **6 series** desde:
  - `https://api.tvmaze.com/shows/1`
  - `https://api.tvmaze.com/shows/2`
  - `...` hasta 6

- Crear objetos `Serie` con los datos recibidos.
- Insertar el contenido HTML generado por `createHtmlElement()` como hijos de `#series`.

---

### 🔄 5. Navegación entre páginas (3 pts)

Crear en `main.js` los métodos:

- `paginaSiguiente()`  
  🔄 Elimina las series actuales del DOM y carga las **6 siguientes** desde la API.

- `paginaAnterior()`  
  🔁 Elimina las series actuales del DOM y carga las **6 anteriores**, si existen.

✅ Asignar estos métodos a los botones con:
- `id="siguiente"`
- `id="anterior"`

---

### 🖱️ 6. Interacción adicional (2 pts)

Modificar el método `createHtmlElement()` para que:

- Al **clic en la imagen**, se abra el enlace (`url`) en una nueva pestaña.
- Agregue un botón **"Guardar"** que llame al método `guardarSerie()`.

---

### 💾 7. Guardado de Series (1 pt)

Implementar el método **estático** `guardarSerie(serie)` en la clase `Serie`:

- Guarda la serie en un array del **localStorage** llamado `seriesGuardadas`.

---

### 📋 8. Mostrar series guardadas (1 pt)

En `guardardos.html`:

- Mostrar solamente las series que se encuentren guardadas en el `localStorage`.

---

### 🔢 9. Ordenamiento en guardardos.html (1 pt)

Agregar botones para ordenar las series guardadas (por nombre, género, etc.).  
Implementar su lógica correctamente.

---

### 💅 10. Estilizado adicional (1 pt)

Agregar **estilos visuales** para:

- Las tarjetas de series.
- Botones.
- Otros componentes de la web.

🎨 Puede usarse CSS puro o Bootstrap para este punto.

---
