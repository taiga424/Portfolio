<template>
  <div id="app">
    <myheader></myheader>
    <home></home>
    <profile></profile>
    <skill></skill>
    <portfolio></portfolio>
  </div>
</template>

<script>
import 'normalize.css'
import myheader from './components/myheader'
import home from './components/home'
import profile from './components/profile'
import portfolio from './components/portfolio'
import skill from './components/skill'

export default {
  name: 'App',
  components: {
    myheader,
    home,
    profile,
    portfolio,
    skill
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
