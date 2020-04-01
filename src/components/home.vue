<template>
  <div id="home">
    <div class="image" :style="{ 'background-image': 'url(' + assetsImage + ')' }">
      <h1 class="title">
        <span
        v-for="(t, index) in title"
        :key="index"
        class="item"
        :style="{animationDelay: index*100+'ms'}"
        v-text="t"
        />
        </h1>
      <p class="subtitle">
        <span
        v-for="(t, index) in text"
        :key="index"
        :style="{animationDelay: index*100+600+'ms'}"
        v-text="t"
        />
      </p>
    </div>
  </div>
</template>

<script>
import AssetsImage from '@/assets/photo1.jpeg'
export default {
  data () {
    return {
      assetsImage: AssetsImage,
      text: "Welcome to Taiga's Portfolio Site",
      title: "Hello I'm Taiga"
    }
  }
}
</script>

<style scoped>

#home {
  width: 100%;
  height: 100vh;
  padding: 20px 50px 30px 50px;
  background-color: #e6e6fa;
  opacity: 1;
  position: relative;
}
.image {
  width: 100%;
  height: 100vh;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}
.title {
  font-size: 55px;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: normal;
  text-shadow: 2px 2px rgba(0,0,0,.2);
  text-align: left;
  position: absolute;
  top: 50%;
}
.subtitle {
  margin-top: 30px;
  font-size: 30px;
  font-family: 'Ubuntu Mono', monospace;
  position: absolute;
  top: 58%;
  text-align: left;
}

@keyframes titleIn {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  color: #ff7f50;
  display: inline-block;
  min-width: 0.3em;
  animation: titleIn .6s cubic-bezier(0.22, 0.15, 0.25, 1.43) 1s backwards;
}

span {
	color: transparent;
  animation: subtitleIn 5s ease-out 1;
  animation-fill-mode: forwards;
}

@keyframes subtitleIn {
	0%		{text-shadow:  0 0 100px #ff7f50; opacity:0;}
	5%		{text-shadow:  0 0 90px #ff7f50;}
	15%		{opacity: 1;}
	30%		{text-shadow:  0 0 0px #ff7f50;}
	100%	{text-shadow:  0 0 0px #ff7f50;}
}
</style>
