<script setup>
import { onMounted } from "vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import BoxApp from "./BoxApp.vue";

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
const backend = [
  { name: "Nodejs", icon: "node-js", stars: 4 },
  { name: "Typescript", icon: "typescript", stars: 2 },
  { name: "Php", icon: "php", stars: 3 },
  { name: "Java", icon: "java", stars: 2, halfStar: true },
];
const frontend = [
  { name: "Javascript", icon: "javascript", stars: 4, halfStar: true },
  { name: "Vue", icon: "vue", stars: 2 },
  { name: "Css", icon: "css", stars: 3, halfStar: true },
  { name: "Sass", icon: "sass", stars: 2, halfStar: true },
  { name: "Bootstrap", icon: "bootstrap", stars: 2, halfStar: true },
];
const others = [
  { name: "Sql", icon: "database", stars: 3 },
  { name: "PL/SQL", icon: "database", stars: 2 },
  { name: "docker", icon: "docker", stars: 1 },
  { name: "Git", icon: "git", stars: 2, halfStar: true },
  { name: "Wordpress", icon: "wordpress", stars: 3 },
];
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
                      <li
                        class="codes__list-item mb-3"
                        v-for="(language, index) in backend"
                        :key="index"
                      >
                        <img
                          :src="`svg/${language.icon}.svg`"
                          :alt="language.icon"
                        />
                        {{ language.name }}
                        <img
                          v-for="(star, index) in language.stars"
                          :key="index"
                          :src="`svg/star.svg`"
                        />
                        <img
                          v-if="language.halfStar"
                          :src="`svg/star-half.svg`"
                        />
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
                      <li
                        class="codes__list-item mb-3"
                        v-for="(language, index) in frontend"
                        :key="index"
                      >
                        <img
                          :src="`svg/${language.icon}.svg`"
                          :alt="language.icon"
                        />
                        {{ language.name }}
                        <img
                          v-for="(star, index) in language.stars"
                          :key="index"
                          :src="`svg/star.svg`"
                        />
                        <img
                          v-if="language.halfStar"
                          :src="`svg/star-half.svg`"
                        />
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
                      <li
                        class="codes__list-item mb-3"
                        v-for="(language, index) in others"
                        :key="index"
                      >
                        <img
                          :src="`svg/${language.icon}.svg`"
                          :alt="language.icon"
                        />
                        {{ language.name }}
                        <img
                          v-for="(star, index) in language.stars"
                          :key="index"
                          :src="`svg/star.svg`"
                        />
                        <img
                          v-if="language.halfStar"
                          :src="`svg/star-half.svg`"
                        />
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
