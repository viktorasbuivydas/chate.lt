<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div :class="variant">
    <slot />
    <span v-if="text">{{ text }}</span>
    <span v-if="!hideClose" class="trailing" @click="closeClickHandler($event)">
      <IconMaterial icon="close" class="toast-close" />
    </span>
  </div>
  <!-- </transition> -->
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: "toast-md toast-trailing-md",
    },
    text: {
      type: [String, Boolean],
      default: false,
    },
    hideClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClickHandler(event) {
      this.$emit("closeClick", event);
    },
  },
});
</script>
