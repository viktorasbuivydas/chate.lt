<template>
  <Card>
    <div class="flex flex-col flex-grow space-y-2">
      <div class="bg-blue-100 p-4 rounded-md flex flex-col text-center">
        <div>
          <b>Topic:</b>
        </div>
        <div>Test test test test test test</div>
        <div>(<b>Merkurijus</b>)</div>
        <div class="text-sm">(Parašė: 2022m. Rugsėjo 30d. - 18val. 16min.)</div>
      </div>
      <div class="border-gray-100 p-2 rounded-md space-y-4">
        <div class="font-semibold text-gray-500">Naujienos</div>
        <div class="flex flex-col space-y-2">
          <CardRow title="Gal kas gali padeti" icon="forum" type="default" />
          <CardRow title="Wap travian" icon="folder" type="default" />
          <CardRow
            title="Kaip sukurti registracija (PHP)"
            icon="school"
            type="default"
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/Card.vue";
import Material from "../components/Material.vue";
import CardRow from "@/Card/Row.vue";
// export default defineComponent({
//   setup() {
//     const store = useStore("auth");
//     store.commit("user/add", { test: "test" });
//     const user = store.getters["user/user"];
//     console.log(user);
//   },
// });
export default {
  layout: "home",
  components: {
    Card,
    Material,
    CardRow,
  },
};
</script>
