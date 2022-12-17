<template>
  <div id="app">
   <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #121212 ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
//import { defineComponent } from '@vue/composition-api'
fetch("http://localhost:3000/posts")
.then(response => {
 return response.json()
 })
 .then(data => {
 console.log("Podaci s backenda ", data)
 })
export default {
  data: function () {
    return {

    };
  },
}
</script>
