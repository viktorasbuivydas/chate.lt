<template>
  <div>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0">
      <LeftSidebar />

      <div class="flex h-screen flex-col md:flex-row md:flex-grow relative p-2">
        <Nuxt />
      </div>
      <RightSidebar />
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
};
</script>

<script setup>
import LeftSidebar from "@/LeftSidebar.vue";
import RightSidebar from "@/RightSidebar.vue";
import { useAsync, useContext, useStore } from "@nuxtjs/composition-api";

const store = useStore();
const { $auth } = useContext();

useAsync(() => {
  const user = $auth.user.data;

  store.dispatch("user/setUserRoles", user.roles);
  store.dispatch("user/setUserPermissions", user.permissions);
});
</script>
