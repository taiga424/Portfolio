<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark header-nav">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/home">ホーム</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/profile">プロフィール</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/portfolio">作品</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/skill">スキル</router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.header {
  height: 70px;
}
.header-nav {
  background-color: #ff7f50;
  height: 70px;
}
</style>