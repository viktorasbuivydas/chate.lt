<template>
  <Card>
    <div class="flex flex-col flex-grow space-y-2">
      <div class="bg-blue-100 p-4 rounded-md flex flex-col text-center">
        <div>
          <b>Topic:</b>
        </div>
        <div>Kuriama...</div>
        <div>(<b>Merkurijus</b>)</div>
        <div class="text-sm">
          (Parašė: 2022m. Lapkričio 13d. - 17val. 10min.)
        </div>
      </div>
      <button v-role="'super admin'">I am super admin</button>
      <div class="border-gray-100 p-2 rounded-md space-y-4">
        <div class="font-semibold text-gray-500">Naujienos</div>
        <div class="flex flex-col space-y-2">
          Kuriama...
          <!-- <CardRow title="Gal kas gali padeti" icon="forum" type="default" /> -->
          <!-- <CardRow title="Wap travian" icon="folder" type="default" /> -->
          <!-- <CardRow
              title="Kaip sukurti registracija (PHP)"
              icon="school"
              type="default"
            /> -->
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import { computed, onMounted } from "vue";
import { useContext, useStore } from "@nuxtjs/composition-api";

const { $auth, app } = useContext();

const store = useStore();

const user = computed(() => {
  return $auth.user.data;
});

onMounted(() => {
  // console.log($gates.getRoles());
});

const fetchTopic = () => {};
</script>
