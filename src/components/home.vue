<template>
  <div class="home">
    <div class="home__titulo">
      <h1>Ejercicios SCSS</h1>
    </div>
    <div class="home__buttons">
      <router-link :to="'/ejercicio1'">
        <button class="home__but">Error Page</button>
      </router-link>
      <router-link :to="'/ejercicio2'">
        <button class="home__but">Login Page</button>
      </router-link>
      <router-link :to="'/ejercicio3'">
        <button class="home__but">Reproductor</button>
      </router-link>
      <router-link :to="'/ejercicio4'">
        <button class="home__but">Corona</button>
      </router-link>
      <router-link :to="'/ejercicio5'">
        <button class="home__but">Redes</button>
      </router-link>
      <router-link :to="'/ejercicio6'">
        <button class="home__but">Shop</button>
      </router-link>
    </div>
    @Daarb13 
  </div>
</template>

<style lang="scss" scoped>

  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .home {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: inline-block;
    background: $DarkSlateGray;
    padding: 30px 40px;
    @include sizes(100%, auto);
    min-height: 100vh;

    &__titulo {
      font-size: 20px;
      color: $Gainsboro;
      margin: 25px;
    }

    &__buttons {
      border: 2px solid $Gainsboro;
      border-radius: 1rem;
      height: auto;
      background: transparent;
      margin-bottom: 40px;
      padding: 20px 0;
      box-shadow: -8px -8px 20px 0px $moonMist, -4px -4px 4px 0px $moonMist,
      8px 8px 20px $blackShadow, 5px 5px 6px 0px $blackShadow;
    }

    &__but {
      width: 80%;
      border: 2px solid $Gainsboro;
      border-radius: 1rem;
      background: transparent;
      color: $Gainsboro;
      padding: 5px;
      margin: 15px;
      font-weight: bold;
      box-shadow: -4px -4px 15px 0px $moonMist, -3px -3px 3px 0px $moonMist,
      4px 4px 10px $blackShadow, 2px 2px 3px 0px $blackShadow;
      &:active {
        box-shadow: inset -8px -8px 20px $moonMist, inset -5px -5px 6px $moonMist,
        inset 8px 8px 20px $blackShadow, inset 5px 5px 6px $blackShadow;
      }
    }
  }

  @media (min-width: $tablet_width) {
    .home{
      &__titulo {
        box-shadow: -8px -8px 20px 0px $moonMist, -4px -4px 4px 0px $black,
        8px 8px 20px $black, 5px 5px 6px 0px $black;
      }
      &__buttons {
        margin: 70px 50px;
        padding: 30px 0;
        box-shadow: -8px -8px 20px 0px $moonMist, -4px -4px 4px 0px $black,
        8px 8px 20px $black, 5px 5px 6px 0px $black;
      }
      &__but {
        width: 30%;
        color: $black;
        background: $Gainsboro;
        padding: 15px;
        margin: 35px;
        font-weight: bold;
        box-shadow: -8px -8px 20px 0px $moonMist, -4px -4px 4px 0px $black,
        8px 8px 20px $black, 5px 5px 6px 0px $black;
        &:active {
          box-shadow: inset -8px -8px 20px $black, inset -5px -5px 6px $moonMist,
          inset 8px 8px 20px $blackShadow, inset 5px 5px 6px $blackShadow;
        }
      }
    }
  }
</style>