<template>
  <div class="container">
    <div class="player">
      <div class="player__controls">
       <router-link :to="'/'">
         <div class="player__btn player__btn--small" id="previous">
          <i class="fas fa-arrow-left"></i>
        </div>
       </router-link>
       <h5 class="player__title">playing now</h5>
       <div class="player__btn player__btn--small" id="icon-menu">
          <i class="fas fa-bars"></i>
       </div>
      </div>
      <div class="player__album">
        <img src="../assets/img/img.png" alt="Album Cover" class="player__img" loading="lazy" />
      </div>

      <h2 class="player__artist">Disclosure</h2>
      <h3 class="player__song">Latch</h3>

      <input type="range" value="20" min="0" class="player__level" id="range" />

      <div class="player__duration">
        <div class="start">00:01</div>
        <div class="end">06:30</div>
      </div>

      <audio class="player__audio" controls id="audio">
        <source src="../assets/img/cancion.mp3" type="audio/mpeg" />
      </audio>

      <div class="player__controls">
        <div class="player__btn player__btn--medium" id="backward">
          <i class="fas fa-backward"></i>
        </div>

        <div class="player__btn player__btn--blue play" @click="play()" id="play">
          <i class="fas fa-play play-btn"></i>
          <i class="fas fa-pause pause-btn hide"></i>
        </div>

        <div class="player__btn player__btn--medium" id="forward">
          <i class="fas fa-forward"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      play() {
        const audio = document.getElementById("audio");
        const playPause = document.getElementById("play");

        playPause.addEventListener("click", () => {
          if (audio.paused || audio.ended) {
            playPause.querySelector(".pause-btn").classList.toggle("hide");
            playPause.querySelector(".play-btn").classList.toggle("hide");
            audio.play();
          } else {
            audio.pause();
            playPause.querySelector(".pause-btn").classList.toggle("hide");
            playPause.querySelector(".play-btn").classList.toggle("hide");
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");
  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .container {
    background-color: $gray;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .player {
      width: 100%;
      height: 570px;
      background-color: $white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // border-radius: 2rem;
      background: linear-gradient(145deg, #4c4747, #4c4747);
      box-shadow:  35px 35px 100px #666666,
        -35px -35px 100px #ffffff;

      &__controls {
        display: flex;
        width: 95%;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 25px;
      }

      &__btn {
        cursor: pointer;
        border-radius: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(145deg, #444040, #4c4747);
        box-shadow:   10px 10px 20px #373333,
          -10px -10px 20px #615b5b;
        color: $white;
        :active {
          box-shadow: inset -8px -8px 20px #fff9, inset -5px -5px 6px #fff9,
          inset 8px 8px 20px #0003, inset 5px 5px 6px #0001;
        }
        &--small {
          min-width: 50px;
          min-height: 50px;
        }
        &--medium {
          min-height: 60px;
          min-width: 60px;
        }
        &--blue {
          background: linear-gradient(145deg, #444040, $Cerulean);
          min-height: 70px;
          min-width: 70px;
        }
      }

      &__title {
        font-weight: bold;
        font-size: 0.9em;
        color: #a1a1a1;
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      &__album {
        width: 150px;
      }

      &__img {
        border-radius: 1rem;
        box-shadow: 2px 2px 7px rgb(163, 177, 198), -2px -2px 7px rgb(163, 177, 198),
          -8px -8px 50px rgba(255, 255, 255, 0.8), 3px 3px 25px rgba(0, 0, 0, 0.6);
      }

      &__artist {
        font-size: 1.2em;
        font-weight: bold;
        opacity: 0.6;
        margin: 20px 0px 0px 0px;
        color: #a1a1a1;
      }

      &__song {
        position: relative;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 1em;
        opacity: 0.7;
        color: #a1a1a1;
      }

      &__level {
        width: 80%;
        padding: 0;
        margin-top: 40px;
        -webkit-appearance: none;
        outline: none;
        border: none;
        &::-webkit-slider-runnable-track {
          background-color: #e28080;
          height: 6px;
          border-radius: 1rem;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          border-radius: 1rem;
          background-color: #060e25;
          height: 20px;
          width: 18px;
          margin-top: -7px;
        }
      }
      
      &__duration {
        margin-top: -30px;
        display: flex;
        width: 78%;
        font-size: 10px;
        font-weight: 600;
        color: #a1a1a1;
        letter-spacing: 1px;
      }

      &__audio {
        visibility: hidden;
      }
    }

    img {
      max-width: 100%;
    }

    .start {
      flex: 1;
    }

    .hide {
      display: none;
    }
  }

  @media (min-width: $mobile_after) {
    .container {
      .player {
        width: 300px;
        height: 570px;
        border-radius: 2rem;
      }
    }
  }
</style>