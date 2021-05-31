<template>
  <div class="login">
    <div class="card">
      <p class="card__Title">Login</p>
      <p class="card__Welcome">
        Welcome back, please provide login credentials to proceed and have
        access to all our services
      </p>

      <form class="form">
        <div class="form__control">
          <input type="text" placeholder="Username" />
          <i class="fas fa-user"></i>
        </div>
        <div class="form__control">
          <input type="password" placeholder="Password" />
          <i class="fas fa-lock"></i>
        </div>
        <router-link :to="'/'">
          <button class="form__submit">Home</button>
        </router-link>
      </form>

      <div class="social">
        <label>Or login with</label>
        <div class="social__cont">
          <button><i class="fab fa-facebook-f"></i></button>
          <button><i class="fab fa-linkedin-in"></i></button>
          <button><i class="fab fa-google"></i></button>
        </div>
      </div>

      <div class="data">
        <p>Forgot Password?</p>
        <p>Not an account? Sign in</p>
        <p>@Daarb13</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import "../sass/vars.scss";
  @import "../sass/mixin.scss";

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    font-size: $text_size;
    font-family: $text_font;
    color: $white;
    background: linear-gradient(80deg, $black, $Cerulean);

    .card {
      padding: 40px 20px;
      max-width: 280px;
      background: #262936;
      border-top: 3px solid $white;
      border-bottom: 3px solid $white;
      box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      &__Title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 20px;
        letter-spacing: 1px;
      }
      &__Welcome {
        font-size: 0.8em;
        margin-bottom: 28px;
        letter-spacing: 0.4px;
        line-height: 17px;
        padding: 0 18px;
      }

      .form {
        display: flex;
        flex-direction: column;

        &__control {
          width: 100%;
          position: relative;
          // border-bottom: 1px solid $Cerulean;  mejor asi
          :first-child {
            border-top: 1px solid $Cerulean;
          }
          input {
            width: 100%;
            outline: none;
            border: none;
            background: rgba(255, 255, 255, 0.08);
            padding: 12px 80px;
            letter-spacing: 0.8px;
            font-size: 0.9em;
          }
          i {
            position: absolute;
            left: 48px;
            top: 30%;
            //para no usar el transform le doy directamente la posicion en top 
            // transform: translateY(-50%);
            transition: color 0.3s; //no entiendo bien esta funcionalidad.
          }
          :focus~i {  // virguilla ~  selector hermano hacer focus en input le da color al hermano i 
            color: $Cerulean;
          }
        }

        &__submit {
          padding: 8px 40px;
          margin: 22px auto;  //auto no se como se referencia para dar ese tamaño
          background: none;
          color: $Cerulean;
          border: 2px solid $Cerulean;
          border-radius: 3rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: background-color 0.4s, color 0.4s;   //igual que la anterior
          // &:active {
          //   box-shadow: inset -8px -8px 20px $Cerulean, inset -5px -5px 6px $Cerulean,
          //   inset 8px 8px 20px $Cerulean, inset 5px 5px 6px $Cerulean;
          // }
          &:hover {
            background-color: #15cae1;
            color: #eee;
          }
        }
      }

      .social {
        display: block;
        text-align: center;
        margin-bottom: 8px;
        font-size: 0.9em;
        font-family: $title_font;
        &__cont {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          button {
            cursor: pointer;
            width: 30px;
            height: 30px;
            background: none;
            border: 1px solid $gray;
            border-radius: 2rem;
            margin: 8px;
            transition: color 0.4s;
            color: $gray;
            :hover {
               color: $Cerulean;
            }
          }
        }
      }

      .data {
        width: 100%;
        display: inline-block;
        justify-content: space-evenly;
        font-size: 0.7em;
        font-family: $title_font;
        color: $gray;
        cursor: pointer;
        transition: color 0.3s;
        :hover {
          color: $Cerulean;
        }
      }
    }
  }

@media (min-width: $tablet_width) {
  .login {
    background: linear-gradient(80deg, $redSolid, $Cerulean);

    .card {
      max-width: 320px;
    }
  }
}
</style>