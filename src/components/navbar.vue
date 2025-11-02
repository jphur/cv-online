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
    <q-toolbar class="navbar fixed-top z-max row justify-between items-center q-px-md">
        <div>
            <q-btn flat round color="green" icon="menu" class="lt-lg">
                <q-menu>
                    <q-list>
                        <q-item v-for="item in navItems" :key="item.index" clickable v-ripple :href="`#${item.id}`" v-close-popup>
                            <q-item-section>
                                <div class="navbar__link">
                                    <span class="q-mr-xs text-green" v-text="item.number" />
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
                            <span class="q-mr-xs text-green" v-text="item.number" />
                            {{ item.label }}
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
        <div>
            <q-btn flat href="https://www.linkedin.com/in/jorgepenadeshurtado/" target="_blank" class="q-mr-sm" aria-label="LinkedIn" dense>
                <q-img src="/svg/linkedin.svg" alt="LinkedIn" width="1rem" />
            </q-btn>
            <q-btn flat href="https://github.com/jphur" target="_blank"  aria-label="GitHub" dense>
                <q-img src="/svg/github.svg" alt="GitHub" width="1rem" />
            </q-btn>
        </div>
    </q-toolbar>
</template>
<style lang="scss" scoped>
    .navbar {
        height: 4.5rem;
        background-color: $main;
        backdrop-filter: blur(0.6rem);

        &__link {
            color: $lightest-slate;
            transition: color 0.25s;

            &:hover {
                color: $green;
            }
        }
    }
</style>
