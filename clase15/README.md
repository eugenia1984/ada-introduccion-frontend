# Clase 15 * 05 de Julio * Fetch

---

## 🏁 Objetivos

- Que puedas obtener los datos de APIs públicas.

- Que puedas exponer dentro del DOM la información obtenida.


---

### Codigo de ejemplo:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clase 16, fetch</title>
</head>
<body>
  <h1></h1>
  <script src="./app.js"></script>
</body>
</html>
```

```JavaScript
// fetch

/**
 * Metodo propio de JS para  enviar un pedido y obtener información del servidor
 * Conectarnos con otras aplicaciones, bases de datos o servidores
  let variable = fecth(url, [options])
 Metodos: GET, POST, PUT, DELETE
 let pokemon = fetch('https://pokeapi.co/pokemons');
 then(callback): Se ejecuta cuando es satisfactoria la respuesta
 catch(callback): Se ejecuta cuando existe un error
*/

let pikachu = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

pikachu
  .then((response) => {
   return response.json();
  })
  .then((data) => {
    console.log(data)
    const h1 = document.querySelector('h1');
    return h1.innerText = data.name;
  })
  .catch((error) => {console.log(error)})
```

---
