<template>
  <div class="w-full">
    <div class="flex flex-col md:hidden space-y-2 text-sm md:text-md">
      <div
        class="cursor-pointer p-4 rounded-xl font-semibold bg-brand hover:text-white flex justify-between items-center text-white"
        @click="toggled = !toggled"
      >
        <div class="flex space-x-2 items-center">
          <Material :icon="activeItem?.icon" />
          <span>{{ activeItem?.name }}</span>
        </div>
        <div>
          <Material icon="expand_more" v-if="toggled" />
          <Material icon="expand_less" v-else />
        </div>
      </div>
      <div v-if="!toggled" class="bg-white">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="selectLink(item)"
          v-if="activeItem?.name !== item.name"
          class="w-full p-4 hover:bg-brand hover:text-white rounded-xl font-semibold space-x-2 flex items-center text-grayish"
        >
          <Material :icon="item.icon" />
          <span>{{ item.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Material from "@/Material.vue";
import { computed, useRoute, useRouter, ref } from "@nuxtjs/composition-api";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const route = useRoute();
const router = useRouter();
const toggled = ref(true);

const isMobileSidebarOpened = ref(false);

const activeItem = computed(() => {
  const currentRoute = "/" + route.value.path.split("/")[1];
  return props.items.find((item) => item.route_url === currentRoute);
});

const selectLink = (item) => {
  toggled.value = !toggled.value;
  router.push(item.route_url);
};
</script>
