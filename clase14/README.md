# Clase 14 * 23 de Junio * Arrays y Objetos II

---

## 🏁 Objetivos

- Que sigas profundizando en conceptos de los arrays y los objetos

- Que puedas reconocer el formato JSON

- Parsear un JSON y obtener los nodos

---

## 📝 Contenidos

- Arrays

- Objetos

- JSON

---

## Los ejercicios ya estan en la clase anterior

Aca dejo uno de ejemplo:

```JavaSCript
// Crear una función _separar_ que tome como argumento un string
// con emojis de perros y gatos y devuelva un string con los perros
// agrupados por un lado y los gatos por otro. 
// Ejemplo:
// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱' 'PgPggPP'----> 'PPPPggg'


const separar = (stringEmojis) => {
  // '🐶🐱🐶🐱🐶🐱🐶🐱' ---> PgPgPgPg
  const perritos = [];
  const gatitos = [];

  for(let i = 0; i < stringEmojis.length; i++) {
    if(stringEmojis[i] === 'P'){
      perritos.push(stringEmojis[i]);
    }else{
      gatitos.push(stringEmojis[i]);
    }
  }

  const unionArrays = perritos.concat(gatitos); 
  const resultado = unionArrays.toString();

  console.log('RESULTADO', resultado);
  return resultado;
}

separar('PgPggPP');

// 
```