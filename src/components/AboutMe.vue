<script setup>
const skills = [
  "Node.js",
  "Vue.js",
  "MySQL / MariaDB",
  "Prompts de IA",
  "Python",
  "Loopback",
  "FastAPI",
  "Quasar",
];
</script>

<template>
  <section class="about-me" id="about-me">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-9">
          <h2 class="section-title">
            <span class="section-number">01.</span> Sobre mí
          </h2>

          <div class="about-me__content">
            <div class="about-me__text">
              <p>
                Desarrollador Full Stack con 2 años de experiencia en Node.js
                y Vue.js, enfocado en desarrollo web y soluciones con IA.
              </p>

              <p>
                Trabajé en la migración completa de un ERP de jardinería de
                AngularJS a Vue.js, modernizando código legado. Actualmente
                sigo desarrollando nuevas funcionalidades para este sistema
                en <a href="https://verdnatura.es" target="_blank" class="highlight-link">Verdnatura</a>.
              </p>

              <p>
                Además, aplico Prompt Engineering e IA en casos prácticos:
                desarrollé un sistema de extracción y clasificación contable de
                facturas usando embeddings (Plan General Contable Español) y
                automatizé la creación de tickets SAT usando IA.
              </p>

              <p>Me gusta cuidar los detalles y buscar soluciones limpias en cada proyecto.</p>

              <ul class="about-me__skills">
                <li v-for="skill in skills" :key="skill">
                  <q-icon name="chevron_right" color="green" size="xs" />
                  {{ skill }}
                </li>
              </ul>
            </div>

            <div class="about-me__image-wrapper">
              <q-img
                src="/images/me.jpg"
                alt="Jorge Penadés"
                class="about-me__image"
                ratio="1"
              >
                <div class="about-me__image-overlay"></div>
              </q-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  min-height: 100vh;
  background-color: $dark-navy;
  padding: 100px 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 25px;
  }

  &__content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    align-items: flex-start;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__text {
    color: $slate;

    p {
      margin-bottom: 15px;
      line-height: 1.8;
    }

    .highlight {
      color: $lightest-slate;
    }

    .highlight-link {
      color: $green;
      text-decoration: none;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        background-color: $green;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  &__skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 10px;
    padding: 0;
    margin: 20px 0 0;
    list-style: none;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  &__image-wrapper {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    border-radius: 4px;

    @media (max-width: 992px) {
      max-width: 250px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid $green;
      top: 20px;
      left: 20px;
      border-radius: 4px;
      z-index: -1;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:hover::before {
      top: 15px;
      left: 15px;
    }

    &:hover .about-me__image-overlay {
      background-color: transparent;
    }
  }

  &__image {
    border-radius: 4px;
    filter: grayscale(100%);
    transition: filter 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      filter: grayscale(0%);
    }
  }

  &__image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 255, 218, 0.2);
    border-radius: 4px;
    transition: background-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}

.section-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: $lightest-slate;
  font-size: clamp(26px, 5vw, 32px);
  font-weight: 700;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    max-width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: $lightest-navy;

    @media (max-width: 768px) {
      max-width: 100px;
    }
  }
}

.section-number {
  color: $green;
  font-family: "Roboto Mono", monospace;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
  margin-right: 10px;
}
</style>
