<template>
    <section class="hero row items-center q-mt-xl">
        <div class="hero__content full-width text-center text-green" :class="$q.screen.gt.xs ? 'q-px-xl' : 'q-px-sm'">
            <p class="typewriter q-mb-sm">Desarrollador Full Stack</p>
            <transition appear enter-active-class="fadeInUp">
                <h1 class="hero__name text-bold">Jorge Penadés Hurtado</h1>
            </transition>
            <transition appear enter-active-class="fadeInDown">
                <h2 class="hero__tagline text-bold">Full Stack Web developer — IA & Prompt Engineering</h2>
            </transition>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .hero {
        background-color: $primary;

        &__name {
            color: $lightest-slate;
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 10px;
        }

        &__tagline {
            color: $slate;
            font-size: 4rem;
            line-height: 1.1;
        }
    }
</style>
