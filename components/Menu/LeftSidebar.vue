<template>
  <SidebarMenuLink
    v-for="(item, index) in items"
    :key="index"
    :url="item.route_url"
    :active="item.route_url === currentRoute"
    class="flex flex-col"
    v-role:any="item.roles"
  >
    <div class="flex flex-col justify-center items-center text-xs">
      <Material :icon="item.icon" />
      <span>{{ item.name }}</span>
    </div>
  </SidebarMenuLink>
</template>
<script setup></script>
