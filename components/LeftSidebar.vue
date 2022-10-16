<template>
  <div>
    <div
      class="p-2 rounded-2xl sm:p-5 bg-white flex flex-col lg:flex-grow-0 w-full lg:w-57.5 space-y-6"
    >
      <div class="w-full">
        <div
          class="hidden md:flex items-center border-b border-card-border pb-4"
        >
          <div>
            <Avatar />
          </div>
          <div class="flex flex-col ml-2">
            <div class="font-medium">Merkurijus</div>
            <div class="text-gray-300">chat.us.lt</div>
          </div>
        </div>
        <!-- mobile menu -->
        <MobileSidebar :items="menuItems" />

        <!-- pc menu -->
        <Sidebar :items="menuItems" />
      </div>

      <Card class="hidden lg:flex">
        <div class="flex-col space-y-2">
          <div class="text-gray-300">Naujausi failai</div>
          <div>websaitas.lt</div>
          <div>websaitas.lt</div>
          <div>websaitas.lt</div>
          <div class="flex items-center space-x-2 text-sm">
            <Material icon="more_horiz" />
            <span>Rodyti daugiau</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "@/Card.vue";
import Avatar from "@/Avatar.vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import MobileSidebar from "@/MobileSidebar.vue";
import Sidebar from "@/Sidebar.vue";
import menuData from "+/menu.json";

const menuItems = ref(menuData);
</script>
