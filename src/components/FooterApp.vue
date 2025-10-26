<script setup>
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jorgepenadeshurtado/",
    icon: "linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/jphur",
    icon: "github.svg",
  },
];
</script>

<template>
  <footer class="footer" id="contact">
    <div class="footer__content">
      <div class="footer__social">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="footer__social-link"
            :aria-label="link.name"
          >
            <img
              :src="`/svg/${link.icon}`"
              :alt="link.name"
              class="footer__social-icon"
            />
          </a>
        </div>

        <p class="footer__year">2025</p>
      </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 14vh;
  background-color: $navy; // slightly lighter than main ($dark-navy)
  padding: 20px 0 6px; // reduce footer height and bottom padding so icons are near edge
  display: flex;
  align-items: center; // center content vertically

  &__content {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
    padding: 8px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .footer {
      min-height: 24vh;
      padding: 24px 0 12px;
    }

    .footer__content {
      padding: 12px 20px;
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 0;
  }

  &__social-link {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
    transition: transform 0.15s ease, background 0.15s ease;

    &:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.03);
    }
  }

  &__social-icon {
    width: 16px;
    height: 16px;
    filter: brightness(0) saturate(100%) invert(81%) sepia(8%) saturate(1216%)
      hue-rotate(167deg) brightness(92%) contrast(88%);
    transition: filter 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      filter: brightness(0) saturate(100%) invert(75%) sepia(29%)
        saturate(1126%) hue-rotate(105deg) brightness(101%) contrast(102%);
    }
  }

  &__year {
    color: $slate;
    font-family: "Roboto Mono", monospace;
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 2px; /* small gap from bottom edge */
  }
}
</style>

