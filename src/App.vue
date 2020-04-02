<template>
  <div id="app">
    <myheader></myheader>
    <home></home>
    <profile></profile>
    <skill></skill>
    <work></work>
  </div>
</template>

<script>
import 'normalize.css'
import myheader from './components/myheader'
import home from './components/home'
import profile from './components/profile'
import work from './components/work'
import skill from './components/skill'

export default {
  name: 'App',
  components: {
    myheader,
    home,
    profile,
    work,
    skill
  }
}
</script>

<style>
 * { box-sizing: border-box; }

#app {
  text-align: center;
  font-size: 62.5%;
}
li {
  list-style: none;
}
html body {
  margin: 0;
  padding: 0;
}
</style>
