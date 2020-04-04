<template>
  <div id="work" class="clearfix">
    <div class="title">Works</div>
    <ul class="work">
      <li class="work-item">
        <a href="http://13.115.54.84:3000/">
          <img src="static/Chatspace.png">
        </a>
        <div class="item-title">ChatSpace</div>
        <p class="item-info">Ruby/Ruby on Rails/MySQL/Github/AWS<br>スクールのカリキュラムで作成しました。<br>簡単なメッセージアプリです。</p>
      </li>
      <li class="work-item">
        <a href="http://13.115.54.84/">
          <img src="static/BookLife.png">
        </a>
        <div class="item-title">BookLife</div>
        <p class="item-info">Ruby/Ruby on Rails/MySQL/Github/AWS<br>初めてゼロから自分で作成しました。<br>本のレビュー＆検索アプリです。</p>
      </li>
      <li class="work-item">
        <a href="http://18.178.222.209">
          <img src="static/FrimaApp.png" >
        </a>
        <div class="item-title">（チーム開発）FrimaApp</div>
        <p class="item-info">Ruby/Ruby on Rails/MySQL/JavaScript/Github/AWS<br>「ID:team-d,Password:2222」でアクセスできます。</p>
      </li>
      <li class="work-item">
        <a href="https://taiga424.github.io/Portfolio/">
          <img src="static/Portfolio.png" >
        </a>
        <div class="item-title">Portfolio</div>
        <p class="item-info">Vue.js/Github<br>Vue.jsの勉強を兼ねて作成しました。</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');
#work {
  padding: 30px;
  background-color: #f6f6f6;
}
.title {
  font-size: 4rem;
  font-family: AlfaSlabOne-Regular,sans-serif;
  color: #4a4a4a;
  letter-spacing: 1px;
  text-align: left;
  border-bottom: 1px solid #111;
  margin-bottom: 50px;
}
.work {
  float: left;
  padding: 0;
}
ul.work li:nth-child(even){
  float: right;
  margin-right: 30px;
}
ul.work li:nth-child(odd){
  float: left;
  clear: left;
  margin-left: 30px;
}
.work-item {
  width: 45%;
  height: auto;
  margin-bottom: 30px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
img:hover {
  transform: scale(1.05);
  transition-duration: 0.4s;
}
.item-title {
  font-weight: bold;
  font-size: 20px;
  color: #4a4a4a;
  margin-top: 10px;
}
.item-info {
  color: #4a4a4a;
  font-size: 14px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
  .work-item {
    width: 42%;
  }
  .item-title {
    font-size: 1.4rem;
  }
  .item-info {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 480px) {
  #work {
    padding: 10px 20px;
  }
  .title {
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  ul.work li {
    width: 100%;
    margin-bottom: 15px;
  }
  ul.work li:nth-child(even){
    margin-right: 0;
  }
  ul.work li:nth-child(odd){
    margin-left: 0;
  }
  .item-title {
    font-size: 1rem;
  }
  .item-info {
    font-size: 0.6rem;
  }
}
</style>
