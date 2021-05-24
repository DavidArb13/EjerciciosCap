<template>
  <body>
    <div class="container">
      <div class="player">
        <div class="player__controls">
          <router-link :to="'/'" class="decoration">
            <div class="player__btn player__btn--small">
              <i class="fas fa-arrow-left"></i>
            </div>
          </router-link>
          <h5 class="player__title">playing now</h5>
          <div class="player__btn player__btn--small">
            <i class="fas fa-bars"></i>
          </div>
        </div>
        <div class="player__album">
          <img
            src="../assets/img/img.png"
            alt="Album Cover"
            class="player__img"
          />
        </div>
        <h2 class="player__artist">Disclousure</h2>
        <h3 class="player__song">Latch</h3>

        <input type="range" value="0" min="0" class="player__level" />

        <div class="audio-duration">
          <div class="start">00:01</div>
          <div class="end">04:30</div>
        </div>

        <audio class="player__audio" controls id="audio">
          <source src="../assets/img/cancion.mp3" type="audio/mpeg" />
        </audio>

        <div class="player__controls">
          <div class="player__btn player__btn--medium">
            <i class="fas fa-backward"></i>
          </div>

          <div class="player__btn player__btn--medium blue" id="play">
            <i class="fas fa-play play-btn hide"></i>
            <i class="fas fa-pause pause-btn hide"></i>
          </div>

          <div class="player__btn player__btn--medium">
            <i class="fas fa-forward"></i>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: $text_font;
}

img {
  max-width: 100%;
}

.container {
  background-color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.player {
  @include sizes(300px, 500px);
  padding-top: 40px;
  background-color: $whiteShadow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.player__controls {
  display: flex;
  width: 95%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 25px;
}

.player__btn {
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -8px -8px 20px 0px $moonMist, -6px -6px 6px 0px $moonMist,
    8px 8px 20px $blackShadow, 5px 5px 6px 0px $blackShadow;
  color: $gray;
  &--small {
    min-width: 50px;
    min-height: 50px;
  }
  &--medium {
    min-height: 70px;
    min-width: 70px;
  }
  &:active {
    box-shadow: inset -8px -8px 20px $moonMist, inset -5px -5px 6px $moonMist,
      inset 8px 8px 20px $blackShadow, inset 5px 5px 6px $blackShadow;
  }
}

.player__title {
  font-weight: 600;
  font-size: 0.8em;
  color: $grayShadow;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

.player__album {
  width: 190px;
}

.player__img {
  border-radius: 30%;
  box-shadow: 2px 2px 7px $sombrasfirst, -2px -2px 7px $sombrasfirst,
    -8px -8px 50px rgba(255, 255, 255, 0.8), 3px 3px 25px rgba(0, 0, 0, 0.6);
}

.player__artist {
  font-size: 1.2em;
  font-weight: 500;
  opacity: 0.5;
  margin: 20px 0px 0px 0px;
}

.player__song {
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 1em;
  opacity: 0.5;
  margin: 0;
}

.player__level {
  width: 80%;
  -webkit-appearance: none;
  outline: none;
  border: none;
  padding: 0;
  margin-top: 40px;
}

.player__level::-webkit-slider-runnable-track {
  background-color: $lightgray;
  height: 5px;
  border-radius: 5px;
}

.player__level::-webkit-slider-thumb {
  -webkit-appearance: none;
  border-radius: 100%;
  background-color: $blueShadow;
  @include sizes(18px, 18px);
  margin-top: -7px;
}

.audio-duration {
  margin-top: -30px;
  display: flex;
  width: 78%;
  font-size: 10px;
  font-weight: 600;
  color: $grayShadow;
  letter-spacing: 1px;
}

.start {
  flex: 1;
}

.player__audio {
  visibility: hidden;
}

.blue {
  background-color: $blueShadow;
  color: $white;
}

.hide {
  display: none;
}

.decoration {
  text-decoration: none;
}
</style>
