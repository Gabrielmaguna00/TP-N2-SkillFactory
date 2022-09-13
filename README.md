# Descripcion

La actividad se basaba en transfomar el TP N°1 (realizado con HTML-CSS-JS) a React JS

## Recursos

Api Rest consumidas:

- [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- [https://rickandmortyapi.com](https://rickandmortyapi.com)

# Correr la app en nuestro PC

```
git clone https://github.com/Gabrielmaguna00/TP-N2-SkillFactory.git
```

```
cd TP2_SF_React
```

Este paso puede llegar a demorar un poco!

```
npm install
```

Una vez finalizada la instalacion corremos el siguiente comando

```
npm start
```

Dirijase a [http://localhost:3000/home](http://localhost:3000/home) para ver la app.

## Componentes

### Home

En el componente Home encontrara tres ventanas el cual cada uno lo redirigira a un componente/url distinto

### Form

En esta seccion se encontrara un formulario, el cual requiere su nombre, email y un mensaje a dejar. Al enviar el formulario se
renderizaran cartas con los datos ingresados

### Users

En esta seccion encontra una tabla con datos de clientes. Los mismo son requeridos a la Api de jsonplaceholder (mencionada anteriomente).
Para manejar la informacion y renderizarla, se utilizaron 2 Hooks de React (useState-useEffect) y el metodo fetch, recibiendo y tratando la promesa con async/await

### Rick and Morty

En esta seccionse realizo un trabajo similar al de Users, ya que tambien se utiliza una Api para obtener la informacion. Al ingresar vera distintas cartas con personajes de la serie Rick&Morty.
Se hizo una peticion a la API para acceder a la informacion de cada personaje y atravez de componentes y estados mostrarlos en el DOM.