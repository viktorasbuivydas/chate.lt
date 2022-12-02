<template>
  <div class="hidden md:flex flex-col space-y-2">
    <SidebarMenuLink
      url="/home/"
      :active="isActive('/home/')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="dashboard" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/chat"
      :active="isActive('/home/chat')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="chat" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/forum"
      :active="isActive('/home/forum')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="forum" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/files"
      :active="isActive('/home/files')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="folder" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/statistic"
      :active="isActive('/home/statistic')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="signal_cellular_alt" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/settings/password"
      :active="isActive('/home/settings')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="settings" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/control"
      :active="isActive('/home/control')"
      class="flex flex-col"
      v-role:any="'super admin|admin|moderator|vip'"
    >
      <template #leading>
        <Material icon="admin_panel_settings" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      :url="'/home/about/' + $auth.user.data.username"
      :active="isActive('/home/about')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="person" />
      </template>
    </SidebarMenuLink>

    <SidebarMenuLink
      url="/home/online"
      :active="isActive('/home/online')"
      class="flex flex-col"
    >
      <template #leading>
        <Material icon="toggle_on" />
      </template>
    </SidebarMenuLink>
  </div>
</template>

<script setup>
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { computed, useContext, useRoute } from "@nuxtjs/composition-api";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const { $auth } = useContext();
const route = useRoute();

const currentRoute = computed(() => {
  const path = route.value.path.split("/")[2]
    ? route.value.path.split("/")[2]
    : "";
  return "/home/" + path;
});

const isActive = (item) => {
  return item === currentRoute.value;
};
</script>
