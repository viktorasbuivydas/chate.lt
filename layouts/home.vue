<template>
  <div>
    <div class="mt-2 flex flex-col md:flex-row space-y-6 md:space-y-0">
      <LeftSidebar />
      <div class="flex h-screen w-full flex-col relative md:p-2">
        <Nuxt />
        <Toasts />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth", "loadData"],
};
</script>

<script setup>
import LeftSidebar from "@/LeftSidebar.vue";
import {
  onMounted,
  useAsync,
  useContext,
  useStore,
} from "@nuxtjs/composition-api";
import Toasts from "@/Toasts.vue";

const store = useStore();
const { $auth, $toast } = useContext();

onMounted(() => {});
useAsync(() => {
  const user = $auth.user.data;

  store.dispatch("user/setUserRoles", user.roles);
  store.dispatch("user/setUserPermissions", user.permissions);
});
</script>
