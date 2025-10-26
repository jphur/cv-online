<script setup>
import { ref } from "vue";

const selectedTab = ref("verdnatura");

const experiences = {
  verdnatura: {
    company: "Verdnatura",
    role: "Full stack Web developer | IA & Prompt engineering",
    period: "Julio 2023 - Actualidad",
    url: "https://verdnatura.es",
    tasks: [
      "Stack tecnológico: Front-end: Vue, Vue-router, Pinia, Quasar; Backend: Loopback 3, Node.js, Python y FASTAPI; Testing: Cypress, Vitest y Jest; DB: MariaDB; Otros: Google Cloud, Gemini API, Vertex AI.",
      "Migración de código AngularJS a Vue.js — modernización del ERP de jardinería.",
      "Desarrollo de nuevas funcionalidades en Vue y Node.js.",
      "Migración de código Access y creación de microservicios con FastAPI.",
      "Prompt engineering: extracción y clasificación de datos de facturas usando embeddings y LLMs.",
      "Automatización de creación de tickets de incidencias mediante IA.",
    ],
  },
  aza: {
    company: "AZA Logistics",
    role: "Desarrollador web Full stack Node.js",
    period: "Marzo 2023 - Julio 2023",
    url: "#",
    tasks: [
      "Desarrollo full stack con Node.js, Express, TypeScript, Sass y Bootstrap 5.",
      "Integración con Microsoft SQL Server y Sequelize.",
      "Microservicios implementados: sistema de reservas de muelles; extracción de datos desde archivos Excel para volcado interno; sistema de KPI para transportistas con Chart.js.",
    ],
  },
  essedi: {
    company: "EsseDi IT Consulting",
    role: "Frontend Web Developer",
    period: "Ago 2022 - Sept 2022",
    url: "#",
    tasks: [
      "Implementación y desarrollo responsive de una landing page en WordPress desde cero.",
      "Tecnologías: HTML, CSS, JavaScript y SASS. Integración de herramientas como Yoast SEO y Contact Form 7.",
    ],
  },
  apunts: {
    company: "Apunts Informática",
    role: "WordPress Developer",
    period: "Dic 2021 - Jul 2022",
    url: "#",
    tasks: [
      "Maquetación web y personalización de estilos mediante CSS.",
      "Implementación de lógica básica con PHP y gestión de funcionalidades mediante plugins.",
    ],
  },
  airconect: {
    company: "AirConect Telecomunicaciones",
    role: "Helpdesk",
    period: "Mar 2021 - May 2021",
    url: "#",
    tasks: [
      "Soporte y diagnóstico de problemas de conectividad de red y hardware (routers, dispositivos WIMAX y ONT).",
    ],
  },
};
</script>

<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-9">
          <h2 class="section-title">
            <span class="section-number">02.</span> Dónde he trabajado
          </h2>

          <div class="experience__content">
            <q-tabs
              v-model="selectedTab"
              vertical
              class="experience__tabs"
              active-color="green"
              indicator-color="green"
            >
              <q-tab
                v-for="(exp, key) in experiences"
                :key="key"
                :name="key"
                :label="exp.company"
                class="experience__tab"
              />
            </q-tabs>

            <q-tab-panels
              v-model="selectedTab"
              animated
              class="experience__panels"
            >
              <q-tab-panel
                v-for="(exp, key) in experiences"
                :key="key"
                :name="key"
                class="experience__panel"
              >
                <h3 class="experience__role">
                  {{ exp.role }}
                  <span class="experience__company">
                    @ {{ exp.company }}
                  </span>
                </h3>
                <p class="experience__period">{{ exp.period }}</p>
                <ul class="experience__tasks">
                  <li v-for="(task, index) in exp.tasks" :key="index">
                    <q-icon name="chevron_right" color="green" size="xs" />
                    {{ task }}
                  </li>
                </ul>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  min-height: 100vh;
  background-color: $navy;
  padding: 100px 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 25px;
  }

  &__content {
    display: flex;
    gap: 20px;
    min-height: 400px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__tabs {
    background-color: transparent;
    min-width: 150px;

    :deep(.q-tab) {
      justify-content: flex-start;
      text-align: left;
      color: $slate;
      font-family: "Roboto Mono", monospace;
      font-size: 13px;
      padding: 12px 20px;
      border-left: 2px solid $lightest-navy;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      &:hover {
        background-color: $green-tint;
        color: $green;
      }

      &.q-tab--active {
        color: $green;
        border-left-color: $green;
      }
    }

    :deep(.q-tabs__indicator) {
      left: 0;
      right: auto;
      width: 2px;
    }
  }

  &__panels {
    flex: 1;
    background-color: transparent;

    :deep(.q-panel) {
      padding: 0 20px;
    }
  }

  &__role {
    color: $lightest-slate;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  &__company {
    color: $green;
  }

  &__company-link {
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

  &__period {
    color: $slate;
    font-family: "Roboto Mono", monospace;
    font-size: 13px;
    margin-bottom: 25px;
  }

  &__tasks {
    list-style: none;
    padding: 0;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 12px;
      color: $slate;
      line-height: 1.6;

      .q-icon {
        position: absolute;
        left: 0;
        top: 5px;
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
