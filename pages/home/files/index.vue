<template>
  <Card>
    <template #header>
      <Header />
    </template>
    <template #headline> Siuntiniai </template>
    <template #content>
      <div class="sm:space-y-0 w-full">
        <div class="sm:p-4 flex flex-col space-y-2">
          kuriama
          <!-- <SidebarMenuLink url="/test">
            <Material icon="search" />
            <span>Paieška</span>
          </SidebarMenuLink>
          <SidebarMenuLink url="/">
            <Material icon="star" />
            <span>Siunčiamiausi</span>
            <span
              class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
            >
              2
            </span>
          </SidebarMenuLink>
          <SidebarMenuLink url="/">
            <Material icon="visibility" />
            <span>Žiūrimiausi</span>
          </SidebarMenuLink>
          <br />
          <SidebarMenuLink url="/">
            <Material icon="feed" />
            <span>Naujausi</span>
          </SidebarMenuLink>

          <br />
          <SidebarMenuLink url="/">
            <Material icon="folder" />
            <span>siuntinys lalala</span>
          </SidebarMenuLink> -->
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import { ref, computed } from "vue";
import menuData from "+/menu.json";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { useRoute } from "@nuxtjs/composition-api";
import Header from "@/Header.vue";
const route = useRoute();

const items = computed(() => {
  return menuData.find((item) => item.route_url === route.path);
});
</script>
