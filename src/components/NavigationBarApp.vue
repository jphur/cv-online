<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

function onScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const navItems = [
  { label: "Sobre mí", href: "#about-me", number: "01" },
  { label: "Experiencia", href: "#experience", number: "02" },
  { label: "Conocimientos", href: "#skills", number: "03" },
];
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container-fluid">
      <!-- Left logo/button removed as requested -->

      <div class="navbar__menu d-none d-lg-flex">
        <ol class="navbar__list">
          <li v-for="item in navItems" :key="item.number" class="navbar__item">
            <a :href="item.href" class="navbar__link">
              <span class="navbar__number">{{ item.number }}.</span>
              {{ item.label }}
            </a>
          </li>
        </ol>
        <!-- Curriculum resume button removed as requested -->
      </div>

      <q-btn
        flat
        round
        color="green"
        icon="menu"
        class="d-lg-none"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &--scrolled {
    height: 70px;
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  }

  .container-fluid {
  height: 100%;
  display: flex;
  justify-content: flex-end; /* align nav items to the right */
  align-items: center;
  padding: 0 50px;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__list {
    display: flex;
    gap: 35px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    counter-increment: item 1;
  }

  &__link {
    display: inline-block;
    text-decoration: none;
    color: $lightest-slate;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;
    padding: 10px;
    transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      color: $green;
    }
  }

  &__number {
    color: $green;
    margin-right: 5px;
  }

  &__resume-btn {
    border: 1px solid $green;
    border-radius: 4px;
    color: $green !important;
    padding: 10px 15px;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;

    &:hover {
      background-color: $green-tint;
    }
  }
}
</style>
