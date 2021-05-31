<template>
  <div class="body">
    <header class="header">
      <a href="/" class="brand">
        <img src="https://i.ibb.co/b6D3Bkn/corona-logo.png" class="brand-img" alt="corona" />
      </a>

      <div class="menuIco" id="icon-menu" @click="menu()">
        <div class="menuIco__bar menuIco__bar--one"></div>
        <div class="menuIco__bar menuIco__bar--two"></div>
        <div class="menuIco__bar menuIco__bar--three"></div>
      </div>

      <nav class="main-nav" id="main-nav">
        <ul class="main-nav-cont">
          <li class="main-nav-cont__item">
            <a href="/" class="main-nav-cont__link main-nav-cont__link--active">bears</a>
          </li>
          <li class="main-nav-cont__item">
            <a href="/" class="main-nav-cont__link">shop</a>
          </li>
          <li class="main-nav-cont__item">
            <a href="/" class="main-nav-cont__link">about</a>
          </li>
          <li class="main-nav-cont__item">
            <a href="/" class="main-nav-cont__link">contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <section class="home">
      <div class="home__split home__split--left">
        <span class="home__small">scroll down</span>
      </div>
      <div class="home__mid">
        <img src="https://i.ibb.co/HqXFb4c/bottle.png" alt="Cerveza" class="home__img" />
      </div>
      <div class="home__split home__split--right">
        <h1 class="home__title">this is living</h1>
        <div class="text">
          <p class="home__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim possimus aperiam molestiae blanditiis suscipit. Quidem delectus, tempora sed sunt ut tempore dolorem culpa nulla voluptatibus molestias, ducimus doloremque id, beatae quae architecto optio sit fuga eius debitis laboriosam sint non?
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    menu() {
      const iconMenu = document.getElementById("icon-menu");
      const mainNav = document.getElementById("main-nav");

      iconMenu.addEventListener("click", () => {
      mainNav.classList.toggle("show-nav");

      iconMenu.classList.toggle("close-menu");
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .body {
  min-height: 100vh;
  font-family: $title_font;
  font-weight: bold;
  font-size: 1em;
  color: $white;
  }

  img {
    max-width: 100%;
  }

  .header {
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
  }

  .brand {
    padding-left: 15px;
    width: 150px;
  }

  .menuIco {
    position: fixed;
    right: 30px;
    cursor: pointer;
    z-index: 100;
    &__bar {
      width: 35px;
      background-color: $white;
      margin: 5px;
      height: 3px;

      .close-menu &--one {
        background-color: $black;
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      .close-menu &--two {
        opacity: 0;
      }

      .close-menu &--three {
        background-color: $black;
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }

  .main-nav {
    background-color: rgba(266, 266, 266, 0.8);
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    min-height: 92vh;
    display: none;
    justify-content: center;
    align-items: center;
    &__cont{
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      &__item{
        list-style: none;
        padding: 0.75rem;
      }
      &__link{
        text-decoration: none;
        color: $black;
        text-transform: uppercase;
        &--active{
          display: flex;
        }
      } 
    }
  }

  .show-nav {
    display: flex;
  }

  .home {
    display: flex;
    &__split {
      width: 50%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    &__split--left {
      background: url("https://i.ibb.co/FHFDB8Q/bg-left.jpg") $splitLeft no-repeat
        center / cover;
      justify-content: flex-end;
    }
    &__small {
      color: $black;
      text-transform: uppercase;
      font-size: 0.85em;
      position: absolute;
      bottom: 30%;
      left: 8%;
      transform: rotate(-90deg);
    }
    &__small::before {
      content: "";
      position: absolute;
      border: 1px solid #000;
      width: 40px;
      top: 9px;
      left: -50%;
    }
    &__split--right {
      background-color: $splitRight;
      align-items: center;
      justify-content: center;
    }
    &__title,
    &__description {
      display: none;
    }
    &__mid {
      position: absolute;
      width: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__img {
      filter: drop-shadow(15px 10px 50px #000);
    }
  }
  
@media (min-width: $tablet_width) {
  .header {
    justify-content: space-between;
    padding: 10px 100px;

    .menuIco {
      display: none;
    }
  }
  
  .main-nav {
    display: flex;
    min-height: 0;
    position: unset;
    width: unset;
    background-color: unset;
    &-cont {
      display: flex;
      &__item {
        margin: 30px;
      }
    }
    &__link {
      color: $white;
      font-size: 0.85em;
    }

    &-cont__link--active,
    &-cont__link:hover {
      color: $splitLeft;
    }
  }
  
  .home {
    &__mid {
      width: 130px;
    }
    &__title,
    &__description {
      display: block;
    }
    &__title {
      font-size: 4em;
      text-transform: uppercase;
    }
  }

  .text {
    width: 25em;
    text-align: justify;
    font-weight: 400;
    margin-top: 50px;
    padding: 0;
  }
}
</style>