<template>
  <div class="ej2">
    <div class="ej2__container">
      <div class="ej2__title">
        <div class="ej2__span">4</div>
        <i class="far fa-question-circle ej2__i"></i>
        <div class="ej2__span">4</div>
      </div>
      <div class="ej2__msg">
        The page you are looking for does not exist.
      </div>
      <div class="ej2__msg">
        you can click the button below to go back to the home page.
      </div>
      <router-link :to="'/'">
        <button class="ej2__btn">Home</button>
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

.ej2{
  &__container {
    @include sizes (100%, auto);
    background-color: $black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__title {
    @include flexbox (inline-block ,center, center);
    text-transform: uppercase;
    letter-spacing: 40px;
    margin-bottom: 20px;
    text-shadow: 7px 7px 0 rgba( 0, 0, 0, 0.3);
  }
  &__span{
    font-size: 5em;
    color: $DeepSkyBlue;
    display: inline-block;
    margin: 30px;
  }
  &__i{
    color: $white;
    font-size: 6em;
    text-shadow: 5px 5px 0 rgba(255, 255, 255, 0.2);
    animation: rotateAnimation 5s alternate-reverse infinite;
  }
  &__msg {
    font-size: $subtitle_size;
    letter-spacing: 1px;
    line-height: 1.8em;
    text-shadow: 7px 7px 0 rgba(252, 252, 252, 0.178);
    color: $white;
    padding: 0 30px;
    text-align: center;
  }
  &__btn {
    background-color: transparent;
    outline: none;
    border: 2px solid $DeepSkyBlue;
    padding: 12px 48px;
    margin: 32px;
    font-size: 1.3em;
    color: $DeepSkyBlue;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 9px 9px 0 rgba(0, 180, 252, 0.2);
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

@media (min-width: $tablet_width){
  .ej2{ 
    &__span{
      font-size: 8em;
    }
    &__i{
      font-size: 9em;
    }
  }
}
</style>