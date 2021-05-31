<template>
  <div class="body">
    <div class="cont">
      <div class="card">
        <div class="face face1">
          <div class="contIco">
            <div class="icon">
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="contIco">
            <h2><a href="/">@ Go Home</a></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae et adipisci cum         molestiae suscipit libero quaerat. Natus laboriosam rem numquam?</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="contIco">
            <div class="icon">
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="contIco">
            <h2><a href="/">@ Go Title</a></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae et adipisci cum molestiae suscipit libero quaerat. Natus laboriosam rem numquam?</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="contIco">
            <div class="icon">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="contIco">
            <h2><a href="/">@ Go Title</a></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae et adipisci cum  molestiae suscipit libero quaerat. Natus laboriosam rem numquam?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");
  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .body {
    min-height: 100vh;
    background: $gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $title_font;
    background-color: $black;
  }
  
  .cont {
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
    .card{
      position: relative;
      &:nth-child(1) {
        .icon{
          background-color: $redSolid;
        }
      }
      &:nth-child(2) {
        .icon{
          background-color: $SanMarino;
        }
      }
      &:nth-child(3) {
        .icon {
          background-color: $Cerulean;
        }
      }
      .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.7s;
        z-index: 1;
        box-shadow:  4px 4px 6px #5a5a5a,
          -4px -4px 60px #686464;
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 150px;
          color: $white;
          transition: 0.3s;
        }
      }
      .face {
        width: 300px;
        height: 200px;
        transition: 0.5s;
      }
      .face1 {
        position: relative;
        background: $splitLeft;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(140px);
      }
      .face2 {
        align-items: center;
        padding: 40px;
        box-sizing: border-box;
        position: relative;
        background: $white;
        display: flex;
        justify-content: center;
        transform: translateY(-60px);
        .contIco {
          h2 {
            font-size: 24px;
            text-align: center;
            a{
              text-decoration: none;
              color: $DarkGoldenrod;
            }
          }
          p {
            text-align: justify;
            color: $DarkGoldenrod;
          }
        }
      }
    }
  }
  .cont .card:hover .face.face1 {
    background: $DarkGoldenrod;
    transform: translateY(0);
    border-radius: 3rem;
    .contIco {
      opacity: 0;
      transition: 0.9s;
    }
  }
  .cont .card:hover .face.face2 {
    transform: translateY(0);
    border-radius: 3rem;
  }
</style>