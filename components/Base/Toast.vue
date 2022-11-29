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

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Material from "@/Material.vue";

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: "flex justify-center items-center",
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
  components: {
    Material,
  },
  methods: {
    closeClickHandler(event) {
      this.$emit("closeClick", event);
    },
  },
});
</script>
