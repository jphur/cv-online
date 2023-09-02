<script setup>
defineProps({
  title: { Boolean, defaul: false },
  color: { String, default: "gray" },
  icon: { String, default: null },
  rounded: { Boolean, default: true },
});
</script>
<template>
  <div
    class="box m-1 p-3 text-white"
    :class="[{ rounded: rounded }, `box--${color}`]"
    data-inviewport
  >
    <h3 v-if="title" class="content-title mb-2">
      {{ title }}
      <img v-if="icon" :src="`svg/${icon}.svg`" />
    </h3>
    <slot name="content"></slot>
  </div>
</template>
<style lang="scss" scoped>
.box {
  &--inclined {
    transform: skewX(-15deg);
  }

  &--light-green {
    background-color: $light-green;
  }

  &--green {
    background-color: $green;
  }

  &--brown {
    background-color: $brown;
  }

  &--gray {
    background-color: $gray;
  }
}
</style>
