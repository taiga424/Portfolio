<template>
  <div id="profile">
    <div class="title">Profile</div>
    <div class="card">
      <div class="front side">
        <h1 class="logo">ABOUT ME<br><span>Please touch</span><br></h1>
      </div>
      <div class="back side">
        <h3 class="name">Hello I'm Taiga</h3>
        <div class="subtext">My Profile</div>
        <div class="profile">
          <div class="image">
            <img src="static/profile.jpeg" alt="Taiga logo">
          </div>
          <p class="text">Taigaと申します。今年22歳になります。
          <br>2020年4月にプログラミングスクールTECH CAMPを卒業し、現在は就職活動をしながらVue.jsを学習中です。
          <br>スクールでは主にHTML&CSSやJavaScript、Ruby on Rails、GitHubを学びました。フロントに興味があります。よろしくお願いします。</p>
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

#profile {
  padding: 30px;
  perspective: 800px;
  color: #3b3b3b;
  letter-spacing: 2px;
  background-color: #f6f6f6;
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
  width: 80%;
  height: 500px;
  background: rgb(20,20,20);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform-style: preserve-3d;
  transition: 1.5s;
  margin: 50px auto;
}
.side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotate(0deg) translateZ(1px);
}
#profile:hover .card, .back {
  transform: rotateY(-180deg) translateZ(1px);
}
.front {
  line-height: 500px;
  background: #f5f5f5;
}
.logo {
  color: #ff7f50;
  display: inline-block;
  font-size: 3.5rem;
  line-height: 0.8;
  font-weight: bolder;
  letter-spacing: 5px;
  text-shadow: 2px 2px rgba(0,0,0,.2);
}
span {
  font-size: 1.5rem;
}
.back {
  background: #f5f5f5;
  padding: 30px;
}
.name {
  color: #ff7f50;
  margin-bottom: 0;
  font-weight: bold;
}
.subtext {
  font-size: 1rem;
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
  font-size: 0.8rem;
  padding: 30px 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
p {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
a {
  color: #3b3b3b;
}
.info {
  position: absolute;
  bottom: 10px;
  text-align: left;
}
.property {
  font-weight: bold;
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) { 
  .title {
    font-size: 3rem;
  } 
  .logo {
    font-size: 2.5rem;
  }
  span {
    font-size: 1rem;
  }
  .profile {
    margin-top: 10px;
    display: block;
  }
  img {
    width: 150px;
    height: 150Px;
  }
  .image {
    width: 150px;
    height: 150Px;
    margin: 0 auto;
  }
  .text {
    padding: 15px;
    font-size: 0.7rem;
    margin-top: 10px;
  }
  p {
    font-size: 0.8rem;
  }
  .property {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) { 
  #profile {
    padding: 10px 20px;
  }
  .card {
    height: 450px;
    margin: 20px auto;
  }
  .title {
    font-size: 1.5rem;
  } 
  .logo {
    font-size: 1.5rem;
  }
  span {
    font-size: 0.8rem;
  }
  .back {
    padding: 15px;
  }
  .name {
    font-size: 1.2rem;
  }
  .subtext {
    font-size: 0.8rem;
  }
  .profile {
    margin-top: 15px;
    display: block;
  }
  img {
    width: 120px;
    height: 120Px;
  }
  .image {
    width: 120px;
    height: 120Px;
    margin: 0 auto;
  }
  .text {
    padding: 10px;
    font-size: 0.6rem;
    margin-top: 10px;
  }
  p {
    font-size: 0.4rem;
  }
  .property {
    font-size: 0.7rem;
  }
  .info {
    position: absolute;
    bottom: 5px;
  }
}
</style>