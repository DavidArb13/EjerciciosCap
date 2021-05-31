<template>
  <div class="error">
    <div class="error__title">
      <div class="error__num">4</div>
      <i class="far fa-question-circle error__i"></i>
      <div class="error__num">4</div>
    </div>
    <div class="error__msg">
      The page you are looking for does not exist.      
    </div>
    <div class="error__msg">
      You can click the button below to go back to the home page.
    </div>
    <router-link :to="'/'">
      <button class="error__btn">Home</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .error {
    @include sizes(100%, auto);
    background-color: $black;
    min-height: 100vh;
    display: flex;
    color: $white;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      margin-bottom: 20px;
      text-shadow: 5px 5px 0 rgba(255, 255, 255, 0.2);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 40px 50px;
    }

    &__num {
      color: $redSolid;
      font-weight: bold;
      font-size: 3em;
      font-family: $title_font;
      border-radius: 3rem;
      background: $white;
      padding: 5px;
      box-shadow: -4px -4px 10px 0px $gray, -2px -2px 2px 0px $gray;
    }

    &__i {
      color: $white;
      font-size: 6em;
      text-shadow: 3px 3px 0 $gray;
      margin: 0 15px;
      animation: rotateAnimation 7s alternate-reverse infinite;
    }

    &__msg {
      font-size: $subtitle_size;
      letter-spacing: 0.1px;
      line-height: 1.2em;
      padding: 10px 30px;
      text-align: center;
      border: 3px solid $white;
      border-radius: 3rem;
      background: $white;
      color: $redSolid;
      margin: 10px 20px;
      font-family: $title_font;
      letter-spacing: 1.4px;
      font-size: 12px;
      font-weight: bold;
      box-shadow: -4px -4px 10px 0px $gray, -2px -2px 2px 0px $gray;
    }

    &__btn {
      background: transparent;
      color: $redSolid;
      outline: none;
      border: 2px solid $white;
      padding: 12px 48px;
      margin: 32px;
      border-radius: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      box-shadow: -4px -4px 10px 0px $moonMist, -2px -2px 2px 0px $moonMist,
      4px 4px 10px $blackShadow, 3px 3px 3px 0px $blackShadow;
      transition: box-shadow 0.5s;
      cursor: pointer;
      &:hover {
        box-shadow: 9px 9px 0 rgba(255, 255, 255, 0.986);
      }
    }
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

@media (min-width: $tablet_width) {
  .error {
    &__num {
      font-size: 7em;
    }

    &__i {
      font-size: 14em;
    }
  }
}
</style>