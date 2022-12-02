<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div :class="variant">
    <slot />
    <span v-if="text">{{ text }}</span>
    <Material
      icon="close"
      v-if="!hideClose"
      @click="closeClickHandler($event)"
    />
  </div>
  <!-- </transition> -->
</template>

<script setup>
import Material from "@/Material.vue";

const props = defineProps({
  variant: {
    type: String,
    default: "flex justify-center items-center",
  },
  text: {
    type: String,
    required: true,
  },
  hideClose: {
    type: Boolean,
    default: false,
  },
});

const closeClickHandler = () => {
  // emit('close')
};
</script>
