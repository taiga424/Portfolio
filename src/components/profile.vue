<template>
    <div id="profile">
    <div class="title">Profile</div>
        <div class="card">
            <div class="front side">
                <h1 class="logo">ABOUT ME<br><span>Please touch</span><br></h1>
            </div>
            <div class="back side">
                <h3 class="name">Hello I'm Taiga</h3>
                <div>My Profile</div>
                <div class="profile">
                    <div class="image">
                      <img src="static/profile.jpeg" alt="Taiga logo">
                    </div>
                    <p class="text">今年22歳のTaigaと申します。
                    <br>2020年4月にプログラミングスクールTECH CAMPを卒業し、現在は就職活動をしながらAWS、Vue.jsなどを学習中です。
                    <br>スクールでは主にHTML&CSSやJavaScript、Ruby on Rails、GitHubを学びました。</p>
                </div>
                <div class="info">
                    <p><span class="property">Email: </span>taiga_hand4@icloud.com</p>
                    <p><span class="property">Twitter: </span>@techcamp_taiga</p>
                    <p><span class="property">GitHub: </span><a href="https://github.com/taiga424">https://github.com/taiga424</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

* { box-sizing: border-box; }

#profile {
  padding: 30px;
  perspective: 1000px;
  /* Styling */
  color: #3b3b3b;
  letter-spacing: 3px;
}
.title {
 font-size: 4rem;
 font-family: AlfaSlabOne-Regular,sans-serif;
 color: #4a4a4a;
 letter-spacing: 1px;
 text-align: left;
 border-bottom: 1px solid #111;
}
.card {
  /* Styling */
  width: 800px;
  height: 500px;
  background: rgb(20,20,20);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* Card flipping effects */
  transform-style: preserve-3d;
  transition: 1.5s;
  margin: 50px auto;
}
.side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  /* Fix Chrome rendering bug */
  transform: rotate(0deg) translateZ(1px);
}

/* Flip the card on hover */
#profile:hover .card, .back {
  transform: rotateY(-180deg) translateZ(1px);
}

/* Front styling */
.front {
  /* Center the name + outline (almost) */
  line-height: 500px;
  text-align: center;
  background: #f5f5f5;
}
.logo {
  color: #ff7f50;
  display: inline-block;
  font-size: 55px;
  line-height: 0.8;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: bolder;
  letter-spacing: 8px;
  text-shadow: 2px 2px rgba(0,0,0,.2);
}
span {
  font-size: 20px;
}
/* Back styling */
.back {
  background: #f5f5f5;
  padding: 30px;
}
.name {
  color: #ff7f50;
  margin-bottom: 0;
}
p {
  margin: 0.8em 0;
}
a {
  color: #3b3b3b;
}
.info {
  position: absolute;
  bottom: 10px;
  text-align: left;
  color: #3b3b3b;
}
.property {
  color: #3B3B3B;
  font-weight: bold;
}
.profile {
  display: flex;
  justify-content: start;
}
.text {
  text-align: left;
  margin: auto 0;
  color: #383838;
  font-weight: bold;
}

.image {

  width: 250px;
  height: 250px;
  margin: 0 20px 30px 0;
}

img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
}
</style>