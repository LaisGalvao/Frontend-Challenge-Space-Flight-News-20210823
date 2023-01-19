<template>
  <div id="app">
    <nav>
      <SortByComponent :sortOptions="options" :search="search"/>
      <h1 class="display-4 my-5"> Space Flight News</h1>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import SortByComponent from './components/SortByComponent.vue'
/* import { toOptions } from './utils' */
export default {
  components: {
    SortByComponent
  },
  computed: {
    options () {
      return [
        { value: 'antigas', text: 'Mais antigas' },
        { value: 'novas', text: 'Mais novas' }
      ]
    }
  }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
