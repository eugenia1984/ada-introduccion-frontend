## Clase 6: 26 Mayo - Práctica CSS

🏁 Objetivos

- Que puedas ejercitar y repasar lo aprendido del módulo hasta el momento

- Que puedas resolver dudas que te hayan quedado pendientes

---

**index.html**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicios Repaso Flexbox</title>
  <link rel="stylesheet" href="./main.css">
</head>
<body>

  <section>
    <div class="red">1</div>
    <div class="blue">2</div>
    <div class="pink">3</div>
    <div class="yellow">4</div>
    <div class="purple">5</div>
  </section>

  <section>
    <div class="red">1</div>
    <div class="blue">2</div>
    <div class="pink">3</div>
    <div class="yellow">4</div>
    <div class="cyan">5</div>
    <div class="green">6</div>
  </section>

</body>
</html>
```

```CSS
section {
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
}

div {
  width: 100px;
  height: 100px;
}

.red {
  background-color: red;
  flex-basis: 25%;
}

.blue {
  background-color: blue;
  flex-basis: 25%;
}

.pink {
  background-color: pink;
  flex-basis: 25%;
}

.yellow {
  background-color: yellow;
  flex-basis: 25%;
}

.cyan {
  background-color: cyan;
  flex-basis: 25%; 
}

.purple {
  background-color: purple;
  flex-basis: auto;
}

.green {
  background-color: green;
  flex-basis: auto;
}
```



---

**layout.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 4 flexbox</title>
  <link rel="stylesheet" href="./layout.css">
</head>
<body>
  <section>
    <div id="menu">MENU</div>
    <div id="contenido">
      <main>MAIN</main>
      <aside>ASIDE</aside>
    </div>
  </section>

  <footer>FOOTER</footer>
</body>
</html>
```

**layout.css**
```CSS
body {
  height: 100%;
  background-color: hotpink;
}

section {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 600px;
  background-color: white;
}

main {
  background-color: silver;
  flex-grow: 2;
  margin: 2%;
}

aside {
  background-color: tan;
  flex-grow: 1;
  margin: 2%;
}

footer {
  height: 300px;
  background-color: indigo;
}

#menu {
  background-color: cyan;
  flex-basis: 600px;
  text-align: center;
  margin: 1%;
}

#contenido {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: royalblue;
  flex-basis: auto;
  padding: 1%;
  margin: 1%;
  text-align: center;
}
```

---
