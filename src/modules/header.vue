<template>
  <div class="header">
    <div class="header__content">
      <div class="header__wrapper">
        <!-- El texto del typewriter ahora es fijo, el efecto se maneja con CSS -->
        <p class="header__greeting typewriter">Desarrollador Full Stack</p>

        <transition appear enter-active-class="fadeInUp">
          <h1 class="header__name">Jorge Penadés Hurtado</h1>
        </transition>

        <transition appear enter-active-class="fadeInDown">
          <h2 class="header__tagline">
            Full Stack Web developer — IA & Prompt Engineering
          </h2>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  min-height: 100vh;
  background-color: $dark-navy;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 5rem;

  &__content {
    width: 100%;
    padding: 0 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 0 25px;
    }
  }

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__greeting {
    color: $green;
    font-family: "Roboto Mono", monospace;
    font-size: clamp(14px, 5vw, 16px);
    margin-bottom: 20px;
  }

  &__name {
    color: $lightest-slate;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 10px;
    max-width: 100%;
    text-align: center;
  }

  &__tagline {
    color: $slate;
    font-size: clamp(30px, 6vw, 60px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 25px;
    max-width: 100%;
    text-align: center;
  }
}
</style>
