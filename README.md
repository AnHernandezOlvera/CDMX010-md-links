# MD LINKS

*Módulo, librería y CLI para la búsqueda de links en archivos markdown con implementación para validar y generar estadísticas.*


# Descripción del módulo

 - Implementa soporte para un archivo individual
 - Implementa soporte para directorios
 - Verifica si el archivo es markdown
 - Encuentra archivos markdown en un directorio (a partir de la ruta que
   recibe como argumento obtenido desde la CLI).
 - Realiza peticiones HTTP
 - Output de validaciones
 - Output de estadísticas
 

**Diagrama de flujo**
![enter image description here](https://raw.githubusercontent.com/AnHernandezOlvera/CDMX010-md-links/master/lib/your-files-here/diagrama-de-flujo.jpg)

## Implementación

El usuario puede seleccionar desde la CLI las siguientes opciones:

**Ver links**

Obtiene información de los links y los retorna en una array de objetos, donde cada objeto representa un un link y contiene las siguientes propiedades:
href: URL encontrada
text: Texto que aparecía dentro del link
file: nombre del archivo
path: ruta del archivo donde encontró el link

 **—validate**

Ejecuta una petición HTTP para averiguar si el link está activo o no.
Si el status de la petición es 200 considera al link como ok, de otro modo lo considera como fail.
El output de —validate incluye la palabra ok o fail, el status de la respuesta recibida a la petición HTTP y la ruta del archivo donde se encuentra el link.

**--stats**
El output es un texto con estadísticas básicas de los links, ejemplo:

Total: 10
Unique: 8

**—stats —validate**

El output es un texto con estadísticas de los resultados de validación:

Total: 10
Unique: 8
Active: 7
Broken: 3

## Instalación
Módulo instalable vía `npm install https://github.com/AnHernandezOlvera/CDMX010-md-links.git`
## Dependencias

 - [chalk](https://www.npmjs.com/package/chalk)
 - [inquirer](https://www.npmjs.com/package/inquirer)
 - [marked](https://github.com/markedjs/marked)
 - [node-fetch](https://www.npmjs.com/package/node-fetch)

## Test

Las pruebas se implementan con [jest](https://jestjs.io/docs/getting-started).

## Licencia
Copyright (c) 2021, Anahí Hernández Olvera. (MIT License)
