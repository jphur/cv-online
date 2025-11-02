<script setup>
import navBar from "../components/nav-bar.vue";
import Header from "./header.vue";
import AboutMe from "./about-me.vue";
import Education from "./education.vue";
import Experience from "./experience.vue";
import Skills from "./skills.vue";
</script>
<template>
  <navBar />
  <Header />
  <main>
    <section class="about-education-section">
      <div class="about-education-container">
        <AboutMe />
        <Education />
      </div>
    </section>
    <Experience />
    <Skills />
  </main>
</template>
<style lang="scss" scoped>
.about-education-section {
  background-color: $dark-navy;
  padding: 100px 50px;

  @media (max-width: 768px) {
    padding: 100px 25px;
  }
}

.about-education-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
