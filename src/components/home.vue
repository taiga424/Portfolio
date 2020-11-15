<template>
  <div id="home">
    <div class="image" :style="{ 'background-image': 'url(' + assetsImage + ')' }">
      <div class="logo">
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
  padding: 50px;
  background-color: #e6e6fa;
  position: relative;
}
.image {
  width: 100%;
  height: 85vh;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.logo {
  position: absolute;
  top: 50%;
  line-height: 0.5;
}
.title {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px rgba(0,0,0,.2);
  text-align: center;
}
.subtitle {
  font-size: 2.5rem;
  text-align: center;
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

@keyframes subtitleIn {
	0%		{text-shadow:  0 0 100px #ff7f50; opacity:0;}
	5%		{text-shadow:  0 0 90px #ff7f50;}
	15%		{opacity: 1;}
	30%		{text-shadow:  0 0 0px #ff7f50;}
	100%	{text-shadow:  0 0 0px #ff7f50;}
}
span {
	color: transparent;
  animation: subtitleIn 5s ease-out 1;
  animation-fill-mode: forwards;
}
@media screen and (max-width: 1024px) {
  #home {
    padding: 10px 40px;
  }
  .title {
    font-size: 3.5rem;
  }
  .subtitle {
    font-size: 2rem;
  }
  .image {
    height: 40vh;
    background-size: 60%;
  }
}
@media screen and (max-width: 768px) {
  #home {
    padding: 20px 30px;
  }
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .image {
    height: 40vh;
  }
}

@media screen and (max-width: 480px) {
  #home {
    padding: 10px 20px;
  }
  .title {
    font-size: 1.2rem;
  }
  .subtitle {
    font-size: 0.7rem;
  }
  .image {
    height: 30vh;
  }
}
</style>
