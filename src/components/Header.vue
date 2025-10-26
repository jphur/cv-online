<script setup>
import { ref, onMounted } from "vue";

// Header only renders the hero content now. NavigationBarApp is rendered
// at the top of the page (in `Home.vue`).

const greeting = ref("");
const typingDone = ref(false);
const _greetingTarget = "Desarrollador Full Stack";

function typeWriter(textRef, target, speed = 70) {
  let i = 0;
  const timer = setInterval(() => {
    textRef.value = target.slice(0, i + 1);
    i++;
    if (i >= target.length) {
      clearInterval(timer);
      // mark typing finished so we can hide the cursor
      typingDone.value = true;
    }
  }, speed);
}

onMounted(() => {
  // start typewriter for the small greeting
  typeWriter(greeting, _greetingTarget, 70);
});
</script>

<template>
  <div class="header">
    <div class="header__content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <p :class="['header__greeting', 'typewriter', { 'typewriter--done': typingDone }]">{{ greeting }}</p>
            <h1 class="header__name animate-fade-down" style="animation-delay:0.25s">
              Jorge Penadés Hurtado
            </h1>
            <h2 class="header__tagline animate-fade-up" style="animation-delay:0.45s">
              Full Stack Web developer — IA & Prompt Engineering
            </h2>
            <!-- CTA eliminado según solicitud (círculo borrado) -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  min-height: 100vh;
  background-color: $dark-navy;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 80px; // leave space for the fixed navbar

  &__content {
    width: 100%;
    padding: 0 50px;
    text-align: center; // center the description and headings
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 0 25px;
    }
  }

  &__greeting {
    color: $green;
    font-family: "Roboto Mono", monospace;
    font-size: clamp(14px, 5vw, 16px);
    margin-bottom: 20px;
  }

  &__name {
    color: $lightest-slate;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 10px;
    max-width: 100%;
    text-align: center;
  }

  &__tagline {
    color: $slate;
    font-size: clamp(30px, 6vw, 60px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 25px;
    max-width: 100%;
    text-align: center;
  }

  &__description {
    color: $slate;
    max-width: 540px;
    line-height: 1.8;
    margin: 0 auto 50px auto; // center block
  }

  &__highlight {
    color: $green;
  }

  /* CTA removed: styles for .header__cta deleted per user request */
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-fade-in-delay-1 {
  animation: fadeIn 1s ease-in-out 0.2s backwards;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-in-out 0.4s backwards;
}

.animate-fade-in-delay-3 {
  animation: fadeIn 1s ease-in-out 0.6s backwards;
}

.animate-fade-in-delay-4 {
  animation: fadeIn 1s ease-in-out 0.8s backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Fade down (appear from above)
@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-down {
  animation: fadeDown 0.9s ease-in-out both;
}

// Fade up (appear from below)
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.9s ease-in-out both;
}

/* Simple typewriter cursor effect */
.typewriter {
  display: inline-block;
  position: relative;
}

.typewriter::after {
  content: "";
  position: absolute;
  right: -10px;
  top: 0.1em;
  width: 2px;
  height: 1.1em;
  background: $green;
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* hide cursor after typing finished */
.typewriter.typewriter--done::after {
  display: none;
}
</style>