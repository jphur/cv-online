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
