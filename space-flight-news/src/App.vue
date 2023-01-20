<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/roboto-condensed');
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #c0c0c070;
}

nav {
  width: 100%;
  padding: 10px;
  position: fixed;
  background-color: #FFF;
  z-index: 999;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
