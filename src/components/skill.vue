<template>
  <div id="skill">
    <div class="title">Skills</div>
    <div class="container">
      <h2 class="title-skill">フロントエンド</h2>
      <ul class="cards">
        <li crass="card" id="html" v-scroll="frontScroll">
          <h3 class="card-title">HTML&CSS</h3>
          <p class="card-info">基本的なことは一通りできます。</p>
        </li>
        <li crass="card" id="javascrpt" v-scroll="frontScroll">
          <h3 class="card-title">javascrpt</h3>
          <p class="card-info">現在勉強中です。簡単な実装はできます。</p>
        </li>
        <li crass="card" id="vue" v-scroll="frontScroll">
          <h3 class="card-title">Vue.js</h3>
          <p class="card-info">現在勉強中です。このポートフォリオサイトはVue.jsで作成しました。</p>
        </li>
        <li crass="card" id="jquery" v-scroll="frontScroll">
          <h3 class="card-title">jQuery</h3>
          <p class="card-info">スクールで少し学習した程度です。</p>
        </li>
      </ul>
      <h2 class="title-skill" >バックエンド</h2>
      <ul class="cards">
        <li crass="card" id="ruby" v-scroll="backScroll">
          <h3 class="card-title">Ruby on Rails</h3>
          <p class="card-info">一番最初に触れたバックエンドの言語です。スクールで主に扱っていました。</p>
        </li>
        <li crass="card" id="mysql" v-scroll="backScroll">
          <h3 class="card-title">MySQL</h3>
          <p class="card-info">MySQLを使ったアプリは何度か作成しました。</p>
        </li>
      </ul>
      <h2 class="title-skill">そのた</h2>
      <ul class="cards">
        <li crass="card" id="git" v-scroll="otherScroll">
          <h3 class="card-title">GitHub</h3>
          <p class="card-info">基本的な使い方は分かります。</p>
        </li>
        <li crass="card" id="aws" v-scroll="otherScroll">
          <h3 class="card-title">AWS</h3>
          <p class="card-info">現在勉強中です。何度かAWSでデプロイしました。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    frontScroll: function (evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 1200) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translateY(-20px)'
        )
      }
    },
    backScroll: function (evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 1500) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translateY(-20px)'
        )
      }
    },
    otherScroll: function (evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 1800) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translateY(-20px)'
        )
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/earlyaccess/nicomoji.css');

#skill {
  padding: 30px;
  background-color: #e6e6fa;
}
.title {
 font-size: 4rem;
 font-family: AlfaSlabOne-Regular,sans-serif;
 color: #4a4a4a;
 letter-spacing: 3px;
 text-align: left;
 border-bottom: 1px solid #4a4a4a;
}
.title-skill {
  font-family: "Nico Moji";
  font-size: 3rem;
  color: #4a4a4a;
  margin: 20px 0;
}
ul.cards {
  padding: 10px 30px;
  list-style-type:none;
  overflow:hidden;
  color: #fff;
  margin-bottom: 40px;
}
li {
  opacity: 0;
}
ul.cards li{
  width: 45%;
  height: 120px;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  text-align: start;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
ul.cards li:nth-child(even){
  float: right;
}
ul.cards li:nth-child(odd){
  float: left;
  clear: left;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bolder;
}
.card-info {
  font-size: 0.8rem;
  color: #fff;
  font-weight: bold;
}
#html {
  background-color: #ff07ff;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#javascrpt {
  background-color: #7f00ff;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#vue {
  background-color: #7fff00;
  transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#jquery {
  background-color: #0000ff;
  transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#ruby {
  background-color: #ff0000;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#mysql {
  background-color: #008000;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#git {
  background-color: #111;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
#aws {
  background-color: #ff7f00;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
@media screen and (max-width: 1024px) {
  ul.cards li {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
  .title-skill {
    font-size: 2.8rem;
  }
  ul.cards {
    margin-bottom: 0;
  }
  ul.cards li {
    height: 90px;
    padding: 15px;
  }
  .card-title {
    font-size: 1.3rem;
  }
  .card-info {
    font-size: 0.6rem;
  }
}

@media screen and (max-width: 480px) {
  #skill {
    padding: 10px 20px;
  }
  .title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  .title-skill {
    font-size: 1.8rem;
    margin: 10px;
  }
  ul.cards {
    margin-bottom: 0;
  }
  ul.cards li {
    width: 100%;
    margin: 10px auto;
    padding: 15px;
  }
  .card-title {
    font-size: 1.1rem;
  }
  .card-info {
    font-size: 0.5rem;
  }
}
</style>