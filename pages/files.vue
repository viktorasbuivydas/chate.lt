<template>
  <Card class="flex flex-col sm:flex-row bg-white space-x-10 space-y-4">
    <div class="sm:space-y-0 w-full">
      <div class="sm:p-4 flex flex-col space-y-2">
        <SidebarMenuLink url="/test">
          <Material icon="search" />
          <span>Paieška</span>
        </SidebarMenuLink>
        <SidebarMenuLink url="/test">
          <Material icon="star" />
          <span>Siunčiamiausi</span>
          <span
            class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
          >
            2
          </span>
        </SidebarMenuLink>
        <SidebarMenuLink url="/test">
          <Material icon="visibility" />
          <span>Žiūrimiausi</span>
        </SidebarMenuLink>
        <br />
        <SidebarMenuLink url="/test">
          <Material icon="feed" />
          <span>Naujausi</span>
        </SidebarMenuLink>

        <br />
        <SidebarMenuLink url="/test">
          <Material icon="folder" />
          <span>aaaaa temos</span>
        </SidebarMenuLink>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from "@/Card.vue";
import { ref, computed } from "vue";
import menuData from "+/menu.json";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { useRoute } from "@nuxtjs/composition-api";

const route = useRoute();

const items = computed(() => {
  return menuData.find((item) => item.route_url === route.path);
});
</script>

<script>
export default {
  layout: "home",
};
</script>
