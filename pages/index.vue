<template>
  <div
    class="min-h-screen grid place-items-center text-2xl font-bold from-slate-100 to-sky-100 text-white bg-gradient-to-tr"
    v-if="status == 'dev'"
  >
    Coming Soon
  </div>

  <div
    v-else
    class="bg-gradient-to-br from-sky-100 to-purple-100 min-h-screen top-0 p-8"
  >
    <h1
      class="mx-auto mt-4 block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-900 dark:from-indigo-500 to-red-500 dark:to-red-500 max-w-max"
    >
      Front-End Challenges Solution
    </h1>

    <!-- <input
      type="text"
      placeholder="Cari Project"
      class="p-3 border rounded-xl mx-auto block mt-12 w-72"
    /> -->

    <div class="max-w-7xl mx-auto px-4 mt-4">
      <b class="text-center mx-auto block mt-4">Tingkatan</b>
      <div class="flex justify-center place-items-center gap-2 mt-2">
        <v-check v-model="difficulty"> SEMUA </v-check>
      </div>
    </div>

    <div
      class="grid grid-cols-3 justify-center gap-4 p-4 mt-4 max-w-7xl mx-auto"
    >
      <NuxtLink
        v-for="project in projects"
        :to="project.path"
        class="rounded-lg border-transparent shadow-xl overflow-hidden bg-white ring-2 ring-transparent hover:ring-sky-700 transition-all"
      >
        <NuxtImg
          :src="`/gallery-thumbnail/001-qrcode.webp`"
          class="w-full"
        ></NuxtImg>
        <div class="p-4">
          <div class="flex justify-between place-items-center">
            <h2 class="text-lg font-bold">{{ project.title }}</h2>
            <v-badge variant="outline-success">
              {{ project.level }}
            </v-badge>
          </div>

          <p class="mt-4">{{ project.description }}</p>
        </div>
        <div class="decorator-gradient absolute"></div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const status = ref("local");
const difficulty = ref(true);

const projects = [
  {
    title: "QR Code",
    path: "/001-qrcode",
    level: "New Bie",
    description:
      "Kalau kamu baru mulai belajar HTML dan CSS, tantangan ini pas banget buat kamu. Layout kartunya nggak bakal geser-geser, jadi cocok kalau kamu belum ngerti soal layout responsif. ✨",
    imagePath: "/001-qrcode.webp",
  },
  {
    title: "Order Summary",
    path: "/002-order-summary",
    level: "New Bie",
    description:
      "A perfect project for newbies who are starting to build confidence with layouts!",
    imagePath: "/001-qrcode.webp",
  },
  {
    title: "Landing Page Portofolio",
    path: "/003-single-page-developer-portofolio",
    level: "Normal",
    description:
      "Tes skill HTML dan CSS kamu dengan proyek situs portofolio ini. 📄 Butuh sedikit pengetahuan JS buat validasi form. ",
    imagePath: "/001-qrcode.webp",
  },
  {
    title: "Result Summary",
    path: "/004-result-summary-component",
    level: "Normal",
    description:
      "Tantangan ini cocok buat siapa saja. 💫 Proyek ini cuma pakai HTML dan CSS, tapi ada juga file JSON hasil tes buat yang mau latihan JavaScript.",
    imagePath: "/001-qrcode.webp",
  },
];
</script>

<style scoped></style>
