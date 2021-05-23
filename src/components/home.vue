<template>
  <div class="ej">
    <div class="ej__container">
      <div class="ej__card">
        <div class="ej__title">
          Ejercicios BEM/SASS con VUE JS
        </div>
        <div class="ej__buttons">
            <router-link :to="'/ejercicio1'">
              <button class="ej__btn">Ejercicio 1</button>
            </router-link>
            <router-link :to="'/ejercicio2'">
              <button class="ej__btn">Ejercicio 2</button>
            </router-link>
            <router-link :to="'/ejercicio3'">
              <button class="ej__btn">Ejercicio 3</button>
            </router-link>
            <router-link :to="'/ejercicio4'">
              <button class="ej__btn">Ejercicio 4</button>
            </router-link>
            <router-link :to="'/ejercicio5'">
              <button class="ej__btn">Ejercicio 5</button>
            </router-link>
            <router-link :to="'/ejercicio6'">
              <button class="ej__btn">Ejercicio 6</button>
            </router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  
  }
}
</script>

<style lang="scss">
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

.ej{
  &__container {
    @include sizes(80%, auto);
    @include flexbox(flex, inherit, inherit);
    flex-wrap: wrap;
    margin: 50px auto;
    align-items: center;   
  }
  &__card {
    border-radius: 20px;
    background: $black;
    text-align: center;
    border: 5px solid $DarkRed;
  }
  &__title {
    @include color($white, $title_size);
    padding: 80px 40px;
    justify-content: center;
  }
  &__buttons {
    display: inline-block;
    padding: $mpadding;
  }
  &__btn {
    background-color: transparent;
    @include color($white, $title_size);
    border-radius: 35% ;
    border: 2px solid $white;
    padding: 10px;
    margin: 20px;
  }
}
@media (min-width: $tablet_width){
  .ej{
    &__title {
    @include color($black, 50px);
    padding: 30px 40px;
  }
    &__card {
    background: $Maroon;
    text-align: center;
    border: 5px solid $black;
  }
    &__btn {
    background-color: $DeepSkyBlue;
    @include color($black, 40px);
    }
  }
}
</style>
