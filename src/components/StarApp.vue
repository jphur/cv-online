<script setup>
const props = defineProps({
  fullStars: { type: Number, required: true },
  halfStar: { type: Boolean, default: false },
});
</script>
<template>
  <img
    v-for="(star, index) in props.fullStars"
    :key="index"
    :src="`svg/star.svg`"
  />
  <img v-if="props.halfStar" :src="`svg/star-half.svg`" />
</template>
<style scoped></style>
