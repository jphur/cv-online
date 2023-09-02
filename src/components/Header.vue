<script setup>
import { onMounted } from "vue";
import NavigationBarApp from "./NavigationBarApp.vue";
onMounted(() => {
  window.addEventListener("resize", responsiveMatrix);

  /**
   * Pinta el lienzo y pinta la lluvia de letras
   */
  function draw() {
    ctx.fillStyle = "rgba(9, 107, 114, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
      let text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = "#0f0";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  /**
   * Cambiamos la altura y el ancho del lienzo y el ancho de las columnas
   * @param {Int} height
   */
  function responsiveMatrix() {
    sizeHeight = header.offsetHeight;
    canvas.width = header.offsetWidth;
    canvas.height = sizeHeight;
    columns = canvas.width / fontSize;
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }

  const canvas = document.querySelector(".header__canvas");
  const ctx = canvas.getContext("2d");
  const header = document.querySelector(".header");
  canvas.width = header.offsetWidth;
  let sizeHeight = header.offsetHeight;
  canvas.height = sizeHeight;

  let letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZ日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789Z";
  letters = letters.split("");

  const fontSize = 10;
  let columns = canvas.width / fontSize;

  let drops = [];
  for (let i = 0; i < columns; i++) drops[i] = 1;

  setInterval(draw, 33);
});
</script>
<template>
  <div class="header position-relative">
    <NavigationBarApp />
    <canvas class="header__canvas position-absolute top-0 left-0 z-1"></canvas>
    <div class="header__text-box text-center position-absolute z-2">
      <h1 class="heading-primary">Jorge Penadés</h1>
      <h2 class="heading-secondary">Desarrollador Web</h2>
    </div>
    <img
      class="header__icon position-absolute z-2"
      src="/images/computer.png"
      alt="hacker-icon"
    />
    <div
      class="header__greeting position-absolute z-2 text-white overflow-hidden"
    >
      <h2 class="header__animated-cursor">¡Vamos a programar!</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 80dvh;
  background-color: $green;

  &__text-box {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__icon {
    top: 52%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 10rem;
    animation: fade;
    animation-duration: 5s;
  }

  &__greeting {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: typing 2.5s steps(26), caret 1s steps(1) infinite;
    width: 14rem;
    min-height: 2rem;
    border-right: 0.05em solid $white;
    white-space: nowrap;
  }

  &__animated-cursor {
    font-size: 1.5rem;
    font-weight: initial;
  }

  @include mv(1200px) {
    &__icon {
      width: 8rem;
    }
  }

  @include mv(1000px) {
    height: 50dvh;

    &__icon {
      display: none;
    }
  }

  @include mv(685px) {
    height: 75dvh;
  }
}
</style>
