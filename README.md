Enunciado/s: 
1.Utilizar la plantilla de parcial subida en: https://onlinegdb.com/5u2Tbhqth

2.(3pts) Agregar los estilos correspondientes utilizando CSS y media queries (NO bootstrap): 
  a. La sección main se comporte como una grilla de dos filas y dos columnas. La sección header debe ocupar la primera fila. La sección nav debe ocupar la primer columna de la segunda fila. La sección con id=principal debe ocupar la segunda columna de la segunda fila. 
  b. La div con id=series debe mostrar a sus elementos hijos en filas de cuatro columnas. Cuando la pantalla mida menos de 900 pixeles, deben ser dos columnas. Cuando la pantalla mida menos de 550 pixeles, debe ser una sola columna. 
  
3.(3pts) Crear en el archivo serie.js la clase Serie con: 
  a. Atributos: id (number), url (string), name (string), language (string), generes (array de string), image (string). 
  b. Constructor. Debe tomar y asignar todos los datos. 
  c. Métodos: 
    i. toJsonString(). De instancia. Devuelve un string json que representa al objeto. 
    ii. createFromJsonString(json) De clase. Devuelve una instancia de la clase serie creada con los datos provenientes del parámetro json de tipo string. 
    iii. createHtmlElement(). De instancia. Devuelve un elemento HTML que permita mostrar del  documento los datos: name, lenguaje, generes e image. 
    
4.(3pts) Crear el archivo main.js que se encargue de: 
  a. Al momento de cargar la página, utilizar el método fetch para traer 6 series de la api: https://www.tvmaze.com/api#shows. 
    Ejemplos: https://api.tvmaze.com/shows/1 
    https://api.tvmaze.com/shows/2 
    https://api.tvmaze.com/shows/3 
    etc. 
  b. Utilizar los datos que traen los fetch para instanciar objetos de la clase Serie. 
  c. Utilizar los objetos de la clase Serie para llamar al método createHtmlElement() e insertar en el DOM dichos elementos como hijos del elemento con id=series. 
  
5.(3pts) En el archivo main.js crear los métodos: 
  a. paginaSiguiente() que permite traer las próximas 6 series de la api. Este eliminará del documento las series ya insertadas e insertará las nuevas. 
  b. paginaAnterior() que permite traer las 6 anteriores series de la api (si es que hay anteriores). Este eliminará del documento las series ya insertadas e insertará las nuevas. 
  c. Asignar los métodos creados a los botones con ids “anterior” y “siguiente”. 
  
6.(2pts) Modificar el retorno del método createHtmlElement() para que: 
  a. Al clickear la imagen, se abre en otra pestaña el link contenido en el atributo url de la clase Serie. 
  b. Agregar un botón debajo de la información de la serie que posea el texto “guardar” y llame al método guardarSerie(). 
  
7.(1pts) Crear el método de clase guardarSerie(serie) de la clase Serie, el cuál guardará la serie seleccionada en un array del localstorage. 

8.(1pts) Realizar la lógica necesaria para que en guardardos.html se muestren únicamente las series guardadas en el localstorage. 

9.(1pts) Realizar la lógica necesaria para que los botones de ordenamiento de guardados.html funcionen correctamente. 

10.(1pts) Agregar estilos (CSS o bootstrap) a las tarjetas de series, botones y demás componentes de la página web. 
