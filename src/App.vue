<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic');
#app {
  font-family: 'Sawarabi Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ff7f50;
  text-align: center;
}
html body{
  background-color: #fafafa;
}
</style>
