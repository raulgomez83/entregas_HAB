<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home |</router-link>
      <router-link to="/about">| About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lime;
}

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: lime;
}

#nav a.router-link-exact-active {
  color: rgb(0, 204, 255);
}
</style>
