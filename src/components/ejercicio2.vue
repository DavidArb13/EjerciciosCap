<template>
  <body class="body">
    <div class="card">
      <p class="card__title">Login to the private area</p>
      <p class="card__welcome-message">
        Welcome back, please provide login credentials to proceed and have
        access to all our services
      </p>

      <form class="card__login-form">
        <div class="card__form-control">
          <input type="text" placeholder="Username" />
          <i class="fas fa-user"></i>
        </div>
        <div class="card__form-control">
          <input type="password" placeholder="Password" />
          <i class="fas fa-lock"></i>
        </div>
        <button class="card__submit">Login</button>
      </form>

      <div class="card__social-login">
        <label>Or login with</label>
        <div class="card__social-container">
          <button><i class="fab fa-facebook-f"></i></button>
          <button><i class="fab fa-linkedin-in"></i></button>
          <button><i class="fab fa-google"></i></button>
        </div>
      </div>

      <div class="card__additional-action">
        <p>Forgot Password?</p>
        <p>Not an account? Sign in</p>
      </div>
    </div>
  </body>
</template>

<script></script>

<style lang="scss">
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

.body {
  min-height: 100vh;
  font-size: $text_size;
  background: linear-gradient(130deg, $pink, $Cerulean);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $text_font;
  color: $white;
}

.card {
  max-width: 340px;
  background: #262936;
  border-top: 3px solid $Cerulean;
  border-bottom: 3px solid $white;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.15);
  padding: 48px 0;
  border-radius: 10px;
  &__title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 1px;
    padding: 0 48px;
  }
  &__welcome-message {
    font-size: 0.8em;
    margin-bottom: 28px;
    letter-spacing: 0.5px;
    line-height: 18px;
    padding: 0 48px;
  }
  &__submit {
    border: none;
    background: none;
    color: $Cerulean;
    border: 2px solid $Cerulean;
    padding: 8px 40px;
    margin: 32px auto;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: background-color 0.4s, color 0.4s;
    &:hover {
      background-color: $Cerulean;
      color: $white;
    }
  }
}

.card__login-form {
  display: flex;
  flex-direction: column;
}

.card__form-control {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 80px;
    letter-spacing: 0.8px;
    font-size: 0.9em;
    color: $white;
  }
  i {
    position: absolute;
    left: 48px;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.3s;
  }
  input:focus ~ i {
    color: $Cerulean;
  }
}

.card__social-login {
  label {
    display: block;
    text-align: center;
    margin-bottom: 8px;
    font-size: 0.9em;
  }
  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: none;
    border: 1px solid #999;
    border-radius: 50%;
    margin: 8px;
    transition: color 0.4s;
    color: $white;
    &:hover i {
      color: $Cerulean;
    }
  }
}

.card__social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}

.card__additional-action {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.8em;
  p {
    margin: auto;
    color: $gray;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: $white;
    }
  }
}
</style>
