<template>
  <div
    class="text-2xl bg-white h-full w-full min-h-screen grid place-items-center sm:bg-[#D5E1EF]"
  >
    <div
      class="h-full w-full grid place-items-center hover:shadow-2xl transition-shadow bg-white px-4 pt-4 pb-10 max-w-[320px] sm:rounded-[20px] sm:h-auto sm:shadow-xl"
    >
      <div>
        <div
          class="qrcode-container bg-[#2C7DFA] h-[288px] w-full rounded-[10px] grid place-items-center overflow-hidden relative"
        >
          <div class="decoration-oval --top-left"></div>
          <div class="decoration-oval --bottom-right"></div>
          <NuxtImg
            src="/001-qrcode/qr.png"
            alt="qrcode"
            class="relative z-10 w-52"
          />
        </div>
        <h3 class="title mt-6">
          Improve your front-end skills by building projects
        </h3>
        <p class="desc mt-4 px-4 text-slate-900">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "FrontEnd Mentor - Qrcode Challenge",
  description: "FrontEnd Mentor - Qrcode Challenge with tailwind css",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");
.title {
  font-family: "Outfit", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
}

.desc {
  font-family: "Outfit", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
}

.decoration-oval {
  border-radius: 9999px;
  position: absolute;
  width: 270px;
  height: 270px;
  transition: all ease 0.3s;
  background: #3685ff;
}

.decoration-oval.--top-left {
  left: -90%;
  top: -90%;
  transform: translate(50%, 50%);
}

.qrcode-container:hover .decoration-oval.--top-left {
  transform: translate(40%, 40%);
}

.decoration-oval.--bottom-right {
  right: -100%;
  top: 100%;
  transform: translate(-50%, -50%);
}

.qrcode-container:hover .decoration-oval.--bottom-right {
  transform: translate(-40%, -40%);
}
</style>
