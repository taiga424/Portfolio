<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark header-nav">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="text-black px-3" to="/home">ホーム</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text-black px-3" to="/profile">プロフィール</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text-black px-3" to="/portfolio">作品</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text-black px-3" to="/skill">スキル</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
*, *::after, *::before {
  box-sizing: border-box;
}

.navbar-nav {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

a {
  font-size: 16px;
  color: #111;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
  text-align: center;
  padding-bottom: 10px;
  width: 150px;
}
a::after {
  width: 100%;
  height: 0;
  background: #3b3b3b;
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
height: 4px;
}
</style>