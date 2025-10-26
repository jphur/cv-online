<script setup>
const studies = [
  {
    title: "Desarrollo de aplicaciones web",
    subtitle: "DAW",
    period: "2021 - 2023",
    icon: "code",
    color: "green",
  },
  {
    title: "Administración de sistemas informáticos en red",
    subtitle: "ASIR",
    period: "2019 - 2021",
    icon: "computer",
    color: "green",
  },
];
</script>

<template>
  <div class="education" id="education">
    <h2 class="section-title">
      <span class="section-number">02.</span> Educación
    </h2>

    <div class="education__content">
      <div class="education__timeline">
        <q-timeline :layout="dense" color="green">
          <q-timeline-entry
            v-for="(study, index) in studies"
            :key="index"
            :title="study.title"
            :subtitle="study.period"
            :icon="study.icon"
            :color="study.color"
          >
            <div class="education__badge">{{ study.subtitle }}</div>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <div class="education__languages">
        <h3 class="education__languages-title">
          <q-icon name="translate" size="24px" color="green" />
          Idiomas
        </h3>
        
        <div class="education__lang-item">
          <div class="education__lang-header">
            <span class="education__lang-flag">🇬🇧</span>
            <span class="education__lang-name">Inglés</span>
          </div>
          <div class="education__lang-level">
            <div class="education__lang-bar">
              <div class="education__lang-progress" style="width: 60%"></div>
            </div>
            <span class="education__lang-text">Intermedio</span>
          </div>
        </div>

        <div class="education__lang-item">
          <div class="education__lang-header">
            <span class="education__lang-flag">🇪🇸</span>
            <span class="education__lang-name">Español</span>
          </div>
          <div class="education__lang-level">
            <div class="education__lang-bar">
              <div class="education__lang-progress" style="width: 100%"></div>
            </div>
            <span class="education__lang-text">Nativo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template><style lang="scss" scoped>
.education {
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__timeline {
    background: transparent;

    :deep(.q-timeline) {
      padding: 0;
    }

    :deep(.q-timeline__subtitle) {
      color: rgba(148, 163, 184, 0.7);
      font-family: "Roboto Mono", monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    :deep(.q-timeline__title) {
      color: $lightest-slate;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 8px;
    }

    :deep(.q-timeline__dot) {
      width: 32px;
      height: 32px;
      background: rgba(16, 185, 129, 0.15);
      border: 2px solid $green;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
    }

    :deep(.q-timeline__dot .q-icon) {
      font-size: 18px;
      color: $green;
    }

    :deep(.q-timeline__dot-img) {
      border-color: $green;
    }

    // Línea vertical que conecta los puntos
    :deep(.q-timeline__dot::before) {
      background: $green;
      opacity: 0.3;
    }

    :deep(.q-timeline__content) {
      padding-bottom: 32px;
      padding-top: 4px;
    }

    :deep(.q-timeline__entry) {
      &:last-child .q-timeline__content {
        padding-bottom: 0;
      }
    }
  }

  &__badge {
    display: inline-block;
    background: rgba(16, 185, 129, 0.1);
    color: $green;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;
    margin-top: 4px;
  }

  &__languages {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid rgba(16, 185, 129, 0.1);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, $green 0%, rgba(16, 185, 129, 0.3) 100%);
    }

    &-title {
      color: $lightest-slate;
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 20px 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__lang-item {
    padding: 16px 0;
    
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    &:first-child {
      padding-top: 0;
    }
  }

  &__lang-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  &__lang-flag {
    font-size: 28px;
    line-height: 1;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  &__lang-name {
    color: $lightest-slate;
    font-size: 16px;
    font-weight: 500;
  }

  &__lang-level {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__lang-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  &__lang-progress {
    height: 100%;
    background: linear-gradient(90deg, $green 0%, rgba(16, 185, 129, 0.7) 100%);
    border-radius: 10px;
    transition: width 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
  }

  &__lang-text {
    color: $green;
    font-size: 13px;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
    min-width: 80px;
    text-align: right;
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

