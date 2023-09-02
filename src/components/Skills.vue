<script setup>
import BoxApp from "./BoxApp.vue";
</script>
<template>
  <section class="skills" id="skills">
    <h2 class="skills__title titles">Conocimientos y Experiencias</h2>
    <div class="container mx-auto">
      <div class="row">
        <div class="col">
          <div class="skills__boxes-container">
            <BoxApp
              :title="'experiencias'.toUpperCase()"
              class="skills__experiences-box"
              color="light-green"
              icon="display"
            >
              <template #content>
                <dl>
                  <dt class="content-subtitle mb-2">
                    Desarrollador Web en Verdnatura desde Julio de 2023
                  </dt>
                  <dd class="skills__text">
                    Desarrollo web con Node.js, Loopback 3, Vue, Quasar, MariaDB
                    y Jest.
                  </dd>
                  <dt class="content-subtitle mb-2">
                    Desarrollador Web en AZA logisitics Marzo-Julio 2023
                  </dt>
                  <dd class="skills__text">
                    Desarrollo web con Node.js, Express.js, Typescript, Sass,
                    Bootstrap 5 y Microsoft SQL SERVER.
                  </dd>
                  <dt class="content-subtitle mb-2">
                    Desarrollador frontend en Essedi Julio-Agosto 2022
                  </dt>
                  <dd class="skills__text">
                    Desarrollo en CSS, SASS, Javascript y Wordpress.
                  </dd>
                  <dt class="content-subtitle mb-2">
                    Desarrollador Wordpress en Apunts Informática Diciembre
                    2021- Junio 2022
                  </dt>
                  <dd class="skills__text">Desarrollo en CSS y Wordpress.</dd>
                </dl>
              </template>
            </BoxApp>
            <BoxApp
              :title="'educación'.toUpperCase()"
              class="skills__education-box"
              color="green"
              icon="graduation-cap"
            >
              <template #content>
                <ul>
                  <li class="skills__items">Desarrollo de aplicaciones Web</li>
                  <li class="skills__items">
                    Administración de sistemas informáicos en red
                  </li>
                  <li class="skills__items">Bachillerato científico</li>
                </ul>
              </template>
            </BoxApp>
            <BoxApp
              :title="'idiomas'.toUpperCase()"
              class="skills__languages-box"
              color="brown"
              icon="language"
            >
              <template #content>
                <ul>
                  <li class="skills__items">Español: Nativo</li>
                  <li class="skills__items">Inglés: Intermedio</li>
                  <li class="skills__items">Valenciano: Nativo</li>
                </ul>
              </template>
            </BoxApp>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.skills {
  &__boxes-container {
    display: grid;
    grid-template-areas: "experiences education" "experiences languages";
    grid-template-columns: 1fr 0.8fr;
  }

  &__text {
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
  }

  &__items {
    margin-bottom: 2rem;
  }

  &__experiences-box {
    grid-area: experiences;
  }

  &__experiences-box[data-inviewport] {
    opacity: 0;
  }

  &__experiences-box[data-inviewport].is-inViewport {
    animation: moveInLeft 3s;
    animation-fill-mode: forwards;
  }

  &__education-box {
    grid-area: education;
  }

  &__education-box[data-inviewport] {
    opacity: 0;
  }

  &__education-box[data-inviewport].is-inViewport {
    animation: moveInTop 3s;
    animation-fill-mode: forwards;
  }

  &__languages-box {
    grid-area: languages;
  }

  &__languages-box[data-inviewport] {
    opacity: 0;
  }

  &__languages-box[data-inviewport].is-inViewport {
    animation: moveInRight 3s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 1000px) {
    &__boxes-container {
      grid-template-areas: "experiences" "education" "languages";
      grid-template-columns: 1fr;
    }

    &__experiences-box[data-inviewport].is-inViewport {
      animation: moveInTop 2s;
      animation-fill-mode: forwards;
    }

    &__education-box[data-inviewport].is-inViewport {
      animation: moveInTop 2s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }

    &__languages-box[data-inviewport].is-inViewport {
      animation: moveInTop 2s;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
  }
}
</style>
