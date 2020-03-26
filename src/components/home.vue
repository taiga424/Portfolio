<template>
  <section>
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      text: "Welcom to Taiga's Portfolio Site",
      title: 'Taiga Furui'
    }
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

section {
  width: 100%;
  height: 90vh;
  padding: 150px;
}
.title {
  font-size: 70px;
  font-family: 'Sawarabi Mincho', sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px rgba(0,0,0,.2)
}
.subtitle {
  margin-top: 30px;
  font-size: 40px;
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
