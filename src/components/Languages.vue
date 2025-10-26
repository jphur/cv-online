<script setup>
const languageCategories = [
  {
    title: "Backend",
    icon: "dns",
    technologies: [
      { name: "Node.js", icon: "svg/node-js.svg", level: 4 },
      { name: "TypeScript", icon: "svg/typescript.svg", level: 3 },
      { name: "PHP", icon: "svg/php.svg", level: 3 },
      { name: "Java", icon: "svg/java.svg", level: 2 },
    ],
  },
  {
    title: "Frontend",
    icon: "web",
    technologies: [
      { name: "JavaScript", icon: "svg/javascript.svg", level: 4.5 },
      { name: "Vue", icon: "svg/vue.svg", level: 4 },
      { name: "CSS", icon: "svg/css.svg", level: 4 },
      { name: "Sass", icon: "svg/sass.svg", level: 3.5 },
      { name: "Bootstrap", icon: "svg/bootstrap.svg", level: 3 },
    ],
  },
  {
    title: "Otros",
    icon: "build",
    technologies: [
      { name: "SQL", icon: "svg/database.svg", level: 3.5 },
      { name: "Vitest", icon: "svg/testing.svg", level: 3 },
      { name: "Docker", icon: "svg/docker.svg", level: 2 },
      { name: "Git", icon: "svg/git.svg", level: 3.5 },
      { name: "WordPress", icon: "svg/wordpress.svg", level: 4 },
    ],
  },
];
</script>

<template>
  <section class="languages" id="codes">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-9">
          <h2 class="section-title">
            <span class="section-number">04.</span> Tecnologías
          </h2>

          <div class="languages__grid">
            <q-card
              v-for="(category, index) in languageCategories"
              :key="index"
              class="languages__card"
              flat
            >
              <q-card-section class="languages__card-header">
                <div class="languages__card-icon-wrapper">
                  <q-icon :name="category.icon" size="32px" color="green" />
                </div>
                <h3 class="languages__card-title">{{ category.title }}</h3>
              </q-card-section>

              <q-card-section class="languages__card-body">
                <div
                  v-for="tech in category.technologies"
                  :key="tech.name"
                  class="languages__tech-item"
                >
                  <div class="languages__tech-info">
                    <img
                      :src="tech.icon"
                      :alt="tech.name"
                      class="languages__tech-icon"
                    />
                    <span class="languages__tech-name">{{ tech.name }}</span>
                  </div>
                  <div class="languages__stars">
                    <q-icon
                      v-for="i in 5"
                      :key="i"
                      :name="
                        i <= Math.floor(tech.level)
                          ? 'star'
                          : i === Math.ceil(tech.level) && tech.level % 1 !== 0
                          ? 'star_half'
                          : 'star_outline'
                      "
                      color="green"
                      size="18px"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.languages {
  min-height: 100vh;
  background-color: $navy;
  padding: 100px 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 25px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  &__card {
    background-color: $light-navy;
    border-radius: 4px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: translateY(-10px);
    }
  }

  &__card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 20px;
  }

  &__card-icon-wrapper {
    width: 70px;
    height: 70px;
    background-color: $green-tint;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__card-title {
    color: $lightest-slate;
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }

  &__card-body {
    padding: 20px;
  }

  &__tech-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid $lightest-navy;

    &:last-child {
      border-bottom: none;
    }
  }

  &__tech-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__tech-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  &__tech-name {
    color: $light-slate;
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
  }

  &__stars {
    display: flex;
    gap: 2px;
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

