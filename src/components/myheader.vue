<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark header-nav">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link class="text-black px-3" to="/#home">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-black px-3" to="/#profile">Profile</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-black px-3" to="/#skill">Skills</router-link>
          </li>
          <li class="nav-item">
              <router-link class="text-black px-3" to="/#work">Works</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  watch: {
    '$route': function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, '')).scrollIntoView()
      }
      console.log('new, old', [n.hash, o.hash])
    }
  },
  mounted () {
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.6;
  background-color: #111;
}
.navbar-nav {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3px;
  justify-content: space-around;
}

a {
  font-size: 17px;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
  text-align: center;
  font-weight: bold;
  padding-bottom: 5px;
}

a::after {
  width: 100%;
  height: 0;
  background: #fff;
  content: '';
  position: absolute;
  top: 75%;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease-out;
  margin: auto;
}
a:hover::after {
  opacity: 1;
  top: 100%;
  height: 3px;
}

@media screen and (max-width: 768px) { 
  .header {
    height: 45px;
  }
  .collapse{
    display: block;
  }
  .navbar-nav {
    flex-direction: row;
  }
  a {
    font-size: 15px;
  }
}
@media screen and (max-width: 480px) { 
  .header {
    height: 25px;
  }
  .header-nav {
    padding: 0;
  }
  .collapse{
    display: block;
  }
  .navbar-nav {
    flex-direction: row;
  }
  a {
    font-size: 10px;
    letter-spacing: 0;
    padding-bottom: 2px;
  }
  a::after {
    width: 80%;
    left: 10%;
  }
  a:hover::after {
    height: 2px;
  }
}
</style>