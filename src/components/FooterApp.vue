<script setup></script>
<template>
  <footer class="footer text-white">
    <div class="container mx-auto">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-4 text-center mt-3">
          <h4 class="footer__title mb-2">Encuéntrame:</h4>
          <div class="footer__container-links">
            <a
              class="m-1"
              href="https://www.linkedin.com/in/jorgepenadeshurtado/"
            >
              <img src="/svg/linkedin.svg" alt="Linkedin-icon" />
            </a>
            <a class="m-1" href="https://github.com/jphur">
              <img src="/svg/github.svg" alt="Linkedin-icon" />
            </a>
          </div>
          <p class="m-1">2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  min-height: 8rem;
  background-color: $gray;

  &__title {
    font-size: 1.5rem;
  }
}
</style>
