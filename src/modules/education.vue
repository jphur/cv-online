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
        <h2 class="section-title"><span class="section-number">02.</span> Educación</h2>

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
        </div>
    </div>
</template>
<style lang="scss" scoped>
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
