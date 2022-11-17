<template>
  <div class="flex flex-col p-4 bg-white flex-shrink-0">
    <div>
      <div
        class="flex flex-row md:flex-col md:space-y-2 items-center justify-center w-full"
      ></div>
      <div class="flex flex-col justify-between h-full">
        <div>
          <div
            class="flex flex-col items-center justify-center space-y-1 -mx-2 h-100 overflow-y-auto"
          >
            <Sidebar :items="menuItems" />
            <MobileSidebar :items="menuItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MobileSidebar from "@/MobileSidebar.vue";
import Sidebar from "@/Sidebar.vue";
import menuData from "+/menu.json";

const menuItems = ref(menuData);
</script>
