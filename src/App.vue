<script setup>
import { onMounted } from "vue";
import Home from "./views/Home.vue";
import FooterApp from "./components/FooterApp.vue";
onMounted(() => {
  /**
   * Añade a las entradas que se ven en pantalla la clase is-inViewport
   * @param {Object} entries
   * @param {Object} observer
   */
  function inViewport(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  }
  const observer = new IntersectionObserver(inViewport);
  const els_inViewport = document.querySelectorAll("[data-inviewport]");
  els_inViewport.forEach((el) => observer.observe(el, {}));
});
</script>
<template>
  <Home/>
  <FooterApp />
</template>
<style lang="scss">
body {
  background-color: $white;
}
</style>
