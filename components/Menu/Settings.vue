<template>
  <div class="flex flex-col space-y-2 text-left p-2">
    <SidebarContentLink
      url="/home/settings/password"
      class="flex flex-col"
      icon="key"
      name="password"
      :current="currentPage"
    >
      Slaptažodžio keitimas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/settings/description"
      class="flex flex-col"
      icon="assignment"
      name="topic"
      :current="currentPage"
    >
      Aprašymo keitimas
    </SidebarContentLink>
  </div>
</template>
<script setup>
import SidebarContentLink from "@/Sidebar/ContentLink.vue";
const props = defineProps({
  currentPage: {
    type: String,
    default: "",
  },
});
</script>
