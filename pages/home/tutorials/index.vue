<template>
  <div class="bg-white">
    <div class="flex flex-col">
      <client-only>
        <CodeEditor
          :languages="[['php', 'PHP']]"
          :value="code"
          width="900px"
          :copy_code="true"
          :wrap_code="true"
          :read_only="true"
        >
        </CodeEditor>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  layout: "index",
  middleware: "auth",
};
</script>
<script setup>
import { ref } from "vue";
const code = ref(
  `<?php
    echo 'test';
    echo '444';
    `
);
</script>
