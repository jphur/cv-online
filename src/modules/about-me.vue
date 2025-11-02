<template>
  <div class="about-me" id="about-me">
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
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.about-me {
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
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
    display: none; // Ocultar imagen para simplificar layout

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
