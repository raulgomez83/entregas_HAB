<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
* {
  background: rgb(19, 19, 19);
  font-family: "Press Start 2P";
  color: whitesmoke;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: inline-block;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: whitesmoke;
  font-size: 0.7rem;
  margin: 1rem;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
