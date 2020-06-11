<template>
  <div id="app">
    <div id="nav">
      <!--  Cabecera común a todas las vistas -->
      <h1>🧟‍♀️🍄 H Radio 🍄👽</h1>
      <router-link to="/">Home</router-link>|
      <router-link to="/top-tracks">Toptracks</router-link>|
      <router-link to="/top-artists">Topartists</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
/* Estilos generales de la web */
@import url("https://fonts.googleapis.com/css2?family=Megrim&display=swap");
* {
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: megrim;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gold;
  background-image: url(./assets/fondo.jpg);
  background-repeat: none;
  background-size: cover;
}

#nav {
  padding: 5rem;
  color: lime;
}

a {
  font-weight: bold;
  color: gold;
  text-decoration: none;
}

a.router-link-exact-active {
  color: violet;
}
h1 {
  color: gold;
  text-shadow: 2px 2px lime;
  margin: 1rem;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  color: gold;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  background: rgba(102, 51, 151, 0.3);
}
</style>
