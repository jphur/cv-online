<script setup>
import BoxApp from "./BoxApp.vue";
</script>
<template>
  <section class="about-me" id="about-me">
    <h2 class="about-me__title titles">Sobre mí</h2>
    <div class="container mx-auto">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-lg-3 mt-3">
          <div
            class="about-me__photo-container d-flex flex-wrap justify-center align-center rounded-circle mx-auto overflow-hidden"
            data-inviewport
          >
            <img class="about-me__photo" src="/images/me.jpg" alt="me" />
          </div>
        </div>
        <div class="col-12 col-sm-8 col-lg-7 col-xl-7 mt-3">
          <BoxApp
            class="about-me__text-container text-white d-flex flex-column justify-center u-zoom p-3"
            :rounded="false"
            data-inviewport
          >
            <template #content>
              <p class="about-me__text">
                Me encanta la programación, por ello, me mantengo en constante
                aprendizaje. Tengo formación tanto en programación, como en
                administración de sistemas. Actualmente, estoy aprendiendo a
                usar Vue y Docker.
              </p>
              <p class="about-me__text">
                Además, de manera adicional, tengo interés en la administración
                en bases de datos, redes y sistemas.
              </p>
            </template>
          </BoxApp>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about-me {
  &__photo-container {
    width: 13rem;
    height: 13rem;
    border: 0.35rem solid $green;
  }

  &__photo-container[data-inviewport] {
    opacity: 0;
  }

  &__photo-container[data-inviewport].is-inViewport {
    opacity: 1;
    animation: moveInTop 3s;
  }

  &__photo {
    width: 12rem;
    height: 15.5rem;
  }

  &__text-container {
    background-color: $gray;
    line-height: 1.5;
    height: 13rem;
    box-shadow: 0.4rem 0.4rem 0.4rem $gray;
  }

  &__text-container[data-inviewport] {
    opacity: 0;
  }

  &__text-container[data-inviewport].is-inViewport {
    opacity: 1;
    animation: moveInBottom 3s;
  }

  @include mv(1400px) {
    &__photo-container {
      width: 10.5rem;
      height: 10.5rem;
      border: 0.3rem solid $green;
    }

    &__photo {
      width: 10rem;
      height: 13.5rem;
    }

    &__text-container {
      height: auto;
    }
  }

  @include mv(768px) {
    &__photo-container {
      width: 7.5rem;
      height: 7.5rem;
      border: 0.2rem solid $green;
    }

    &__photo {
      width: 7rem;
      height: 9rem;
    }
  }
}
</style>
