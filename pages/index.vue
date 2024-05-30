<template>
  <div
    class="min-h-screen grid place-items-center text-2xl font-bold from-slate-900 to-sky-900 text-white bg-gradient-to-tr"
    v-if="status == 'dev'"
  >
    Coming Soon
  </div>

  <div v-else>
    <div v-for="project in projects" class="p-2">
      {{ project }}
    </div>
  </div>
</template>
<script setup lang="ts">
const status = ref("local");

const projects = [
  {
    title: "QR Code",
    path: "/001-qrcode",
    level: "easy",
  },
  {
    title: "QR Code",
    path: "/002-order-summary",
    level: "easy",
  },
];
</script>
