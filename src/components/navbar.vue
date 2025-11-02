<script setup>
    import { onMounted } from "vue";

    onMounted(() => {
        window.addEventListener("scroll", () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) navbar.classList.add("inset-shadow-down");
            else navbar.classList.remove("inset-shadow-down");
        });
    });

    const navItems = [
        { label: "Sobre mí", number: "01." },
        { label: "Experiencia", number: "02." },
        { label: "Conocimientos", number: "03." },
    ];
</script>
<template>
    <nav class="navbar fixed-top row justify-between items-center q-px-md">
        <div>
            <q-btn flat round color="green" icon="menu" class="lt-lg">
                <q-menu>
                    <q-list>
                        <q-item v-for="item in navItems" :key="item.index" clickable v-ripple :href="`#${item.id}`" v-close-popup>
                            <q-item-section>
                                <div class="navbar__link">
                                    <span class="q-mr-xs text-green">{{ item.number }}</span>
                                    {{ item.label }}
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
            <q-list class="row gt-md">
                <q-item v-for="item in navItems" :key="item.index" clickable v-ripple :href="`#${item.id}`" class="q-pa-none">
                    <q-item-section>
                        <div class="navbar__link q-px-sm">
                            <span class="q-mr-xs text-green">{{ item.number }}</span>
                            {{ item.label }}
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
        <div>
            <q-btn flat href="https://www.linkedin.com/in/jorgepenadeshurtado/" target="_blank" class="q-mx-xs" aria-label="LinkedIn" dense>
                <q-img src="/svg/linkedin.svg" alt="LinkedIn" class="navbar__social-icon" width="1rem" />
            </q-btn>
            <q-btn flat href="https://github.com/jphur" target="_blank" class="q-mx-xs" aria-label="GitHub" dense>
                <q-img src="/svg/github.svg" alt="GitHub" class="navbar__social-icon" width="1rem" />
            </q-btn>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    .navbar {
        height: 4.5rem;
        background-color: $main;
        backdrop-filter: blur(0.6rem);
        z-index: 100;

        &__social-icon {
            filter: brightness(0) saturate(100%) invert(81%) sepia(8%) saturate(1216%) hue-rotate(167deg) brightness(92%) contrast(88%);
            transition: filter 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        &__link {
            color: $lightest-slate;
            transition: color .25s;

            &:hover {
                color: $green;
            }
        }
    }
</style>
