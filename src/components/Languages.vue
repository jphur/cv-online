<script setup>
import { onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import BoxApp from "./BoxApp.vue";
import StarApp from "./starApp.vue";

onMounted(() => {
  const swiper = new Swiper("#swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
</script>
<template>
  <section class="codes" id="codes">
    <h2 class="titles">Lenguajes</h2>
    <div class="container mx-auto">
      <div class="row">
        <div class="col position-relative">
          <div id="swiper" class="codes__container" data-inviewport>
            <div class="swiper-wrapper mb-5">
              <div class="swiper-slide d-flex justify-content-center">
                <BoxApp
                  title="BACKEND"
                  color="green"
                  class="codes__box"
                  :rounded="false"
                >
                  <template #content>
                    <ul class="codes__list">
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/node-js.svg`" alt="node-js" />
                        Nodejs
                        <StarApp :full-stars="4" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/typescript.svg`" alt="typescript" />
                        Nodejs
                        <StarApp :full-stars="2" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/php.svg`" alt="php" />
                        Php
                        <StarApp :full-stars="3" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/java.svg`" alt="java" />
                        Java
                        <StarApp :full-stars="2" :half-star="true" />
                      </li>
                    </ul>
                  </template>
                </BoxApp>
              </div>
              <div class="swiper-slide d-flex justify-content-center">
                <BoxApp
                  title="FRONTEND"
                  class="codes__box"
                  color="green"
                  :rounded="false"
                >
                  <template #content>
                    <ul class="codes__list">
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/javascript.svg`" alt="javascript" />
                        Javascript
                        <StarApp :full-stars="4" :half-star="true" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/vue.svg`" alt="vue" />
                        Vue
                        <StarApp :full-stars="3" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/css.svg`" alt="css" />
                        Css
                        <StarApp :full-stars="3" :half-star="true" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/sass.svg`" alt="sass" />
                        Sass
                        <StarApp :full-stars="2" :half-star="true" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/bootstrap.svg`" alt="bootstrap" />
                        Bootstrap
                        <StarApp :full-stars="2" :half-star="true" />
                      </li>
                    </ul>
                  </template>
                </BoxApp>
              </div>
              <div class="swiper-slide d-flex justify-content-center">
                <BoxApp
                  title="OTROS"
                  color="green"
                  class="codes__box"
                  :rounded="false"
                >
                  <template #content>
                    <ul class="codes__list">
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/database.svg`" alt="database" />
                        Sql
                        <StarApp :full-stars="3" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/testing.svg`" alt="testing" />
                        Vitest
                        <StarApp :full-stars="2" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/docker.svg`" alt="docker" />
                        Docker
                        <StarApp :full-stars="1" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/git.svg`" alt="git" />
                        Git
                        <StarApp :full-stars="2" :half-star="true" />
                      </li>
                      <li class="codes__list-item mb-3">
                        <img :src="`svg/wordpress.svg`" alt="wordpress" />
                        Wordpress
                        <StarApp :full-stars="3" />
                      </li>
                    </ul>
                  </template>
                </BoxApp>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.codes {
  .swiper-pagination-bullet-active {
    background-color: $light-green;
  }
}
</style>
<style lang="scss" scoped>
.codes {
  &__box {
    width: 20vw;
    max-width: 20rem;
    height: 20rem;
  }

  @media (max-width: 1400px) {
    &__box {
      width: 20vw;
      height: 18rem;
    }
  }

  @media (min-width: 1000px) {
    &__box[data-inviewport] {
      opacity: 0;
    }

    &__box[data-inviewport].is-inViewport {
      animation: moveSkew 2s;
      animation-fill-mode: forwards;
    }
  }

  @media (max-width: 1000px) {
    &__container[data-inviewport] {
      opacity: 0;
    }

    &__container[data-inviewport].is-inViewport {
      opacity: 1;
      animation: fade 3s;
    }

    &__box {
      width: 80vw;
      transform: skewX(0deg);
      height: 17rem;
      max-width: 20rem;
    }
  }
}
</style>
