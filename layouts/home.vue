<template>
  <div>
    <Header />

    <div class="mt-2 flex flex-col md:flex-row space-y-6 md:space-y-0">
      <LeftSidebar />
      <div class="flex h-screen w-full flex-col relative p-2">
        <Nuxt />
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
import Header from "@/Header.vue";
import {
  onMounted,
  useAsync,
  useContext,
  useStore,
} from "@nuxtjs/composition-api";

const store = useStore();
const { $auth, $toast } = useContext();

onMounted(() => {
  // $toast.show({
  //   type: "success",
  //   title: "Success",
  //   message: "This is a successful toast",
  // });
});
useAsync(() => {
  const user = $auth.user.data;

  store.dispatch("user/setUserRoles", user.roles);
  store.dispatch("user/setUserPermissions", user.permissions);
});
</script>
