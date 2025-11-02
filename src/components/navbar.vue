<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) navbar.classList.add('navbar--scrolled')
       else navbar.classList.remove('navbar--scrolled')
    })
  })

const navItems = [
    { label: 'Sobre mí', number: '01.' },
    { label: 'Experiencia', number: '02.' },
    { label: 'Conocimientos', number: '03.' }
]
</script>
<template>
    <nav class="navbar">
        <div class="navbar__container">
            <div class="navbar__left">
                <q-btn flat round color="green" icon="menu" class="lt-lg">
                    <q-menu>
                        <q-list class="navbar__mobile-list">
                          <q-item v-for="item in navItems" :key="item.index" clickable v-ripple :href="`#${item.id}`" v-close-popup class="navbar__mobile-item">
                                <q-item-section>
                                    <div class="navbar__mobile-link">
                                        <span class="navbar__number">{{ item.number }}</span>
                                        {{ item.label }}
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-list class="navbar__list">
                    <q-item v-for="item in navItems" :key="item.index" clickable v-ripple :href="`#${item.id}`" class="navbar__item">
                        <q-item-section>
                            <div class="navbar__link">
                                <span class="navbar__number">{{ item.number }}</span>
                                {{ item.label }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div class="navbar__right">
                <div class="navbar__socials">
                    <a href="https://www.linkedin.com/in/jorgepenadeshurtado/" target="_blank" class="navbar__social-link" aria-label="LinkedIn">
                        <img src="/svg/linkedin.svg" alt="LinkedIn" class="navbar__social-icon" />
                    </a>
                    <a href="https://github.com/jphur" target="_blank" class="navbar__social-link" aria-label="GitHub">
                        <img src="/svg/github.svg" alt="GitHub" class="navbar__social-icon" />
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: rgba(10, 25, 47, 0.85);
        backdrop-filter: blur(10px);
        z-index: 100;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &--scrolled {
            height: 70px;
            box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
        }

        &__container {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px;
            max-width: 100%;

            @media (max-width: 768px) {
                padding: 0 25px;
            }
        }

        &__left {
            display: flex;
            align-items: center;
        }

        &__right {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        &__menu {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        &__list {
            display: flex;
            gap: 35px;
            margin: 0;
            padding: 0;
            list-style: none;

            @media (max-width: 1023px) {
                display: none;
            }

            :deep(.q-item) {
                padding: 0;
                min-height: auto;
                background: transparent;
            }

            :deep(.q-item__label) {
                padding: 0;
            }
        }

        &__item {
            padding: 0;
            min-height: auto;
        }

        &__mobile-link {
            font-family: "Roboto Mono", monospace;
            font-size: 14px;
            color: $lightest-slate;
        }

        &__socials {
            display: flex;
            gap: 12px;
        }

        &__social-link {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            transition: transform 0.15s ease, background 0.15s ease;
        }

        &__social-icon {
            width: 16px;
            height: 16px;
            display: block;
            /* Restore previous color filters from FooterApp to match original design */
            filter: brightness(0) saturate(100%) invert(81%) sepia(8%) saturate(1216%) hue-rotate(167deg) brightness(92%) contrast(88%);
            transition: filter 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

            &:hover {
                filter: brightness(0) saturate(100%) invert(75%) sepia(29%) saturate(1126%) hue-rotate(105deg) brightness(101%) contrast(102%);
            }
        }

        &__item {
            counter-increment: item 1;
        }

        &__link {
            display: inline-block;
            text-decoration: none;
            color: $lightest-slate;
            font-family: "Roboto Mono", monospace;
            font-size: 13px;
            padding: 10px;
            transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

            &:hover {
                color: $green;
            }
        }

        &__number {
            color: $green;
            margin-right: 5px;
        }

        &__resume-btn {
            border: 1px solid $green;
            border-radius: 4px;
            color: $green !important;
            padding: 10px 15px;
            font-family: "Roboto Mono", monospace;
            font-size: 13px;

            &:hover {
                background-color: $green-tint;
            }
        }
    }
</style>
