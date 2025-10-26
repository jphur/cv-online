<script setup>
const skills = [
  {
    category: "Principales",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Vue.js", level: 90 },
      { name: "MySQL / MariaDB", level: 80 },
      { name: "Prompts / IA", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    category: "Backend / APIs",
    items: [
      { name: "Loopback 3", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "Express", level: 75 },
      { name: "SQL Server", level: 70 },
    ],
  },
  {
    category: "Testing / DevOps",
    items: [
      { name: "Cypress", level: 70 },
      { name: "Vitest / Jest", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Git", level: 85 },
    ],
  },
];
</script>

<template>
  <section class="skills" id="skills">
    <div class="skills__container">
      <h2 class="section-title">
        <span class="section-number">04.</span> Conocimientos
      </h2>

      <div class="skills__grid">
          <div
            v-for="(category, index) in skills"
            :key="index"
            class="skills__category"
          >
            <h3 class="skills__category-title">{{ category.category }}</h3>
            <div class="skills__items">
              <div
                v-for="skill in category.items"
                :key="skill.name"
                class="skills__item"
              >
                <div class="skills__item-header">
                  <span class="skills__item-name">{{ skill.name }}</span>
                  <span class="skills__item-level">{{ skill.level }}%</span>
                </div>
                <div class="skills__bar">
                  <div
                    class="skills__bar-fill"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  min-height: 100vh;
  background-color: $dark-navy;
  padding: 100px 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 25px;
  }

  @media (max-width: 992px) {
    &__grid {
      grid-template-columns: repeat(2, minmax(240px, 1fr));
    }
  }

  @media (max-width: 768px) {
    &__grid {
      grid-template-columns: 1fr;
    }
  }

  &__container {
    max-width: 1000px;
    margin: 0 auto;
  }

  &__grid {
    /* Use grid so cards align properly in rows (3 columns on desktop, responsive to 1 column on mobile) */
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 320px));
    justify-content: center;
    gap: 30px;
  }

  &__category {
    background-color: $light-navy;
    padding: 30px;
    border-radius: 4px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* let grid define the width; remove fixed width */

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__category-title {
    color: $lightest-slate;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: $green;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    &-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    &-name {
      color: $light-slate;
      font-size: 14px;
      font-family: "Roboto Mono", monospace;
    }

    &-level {
      color: $green;
      font-size: 12px;
      font-family: "Roboto Mono", monospace;
    }
  }

  &__bar {
    width: 100%;
    height: 6px;
    background-color: $lightest-navy;
    border-radius: 3px;
    overflow: hidden;

    &-fill {
      height: 100%;
      background-color: $green;
      border-radius: 3px;
      transition: width 1s ease-out;
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

