<template>
  <div
    class="font-red-hat-display min-h-screen bg-indigo-50 grid place-items-center"
  >
    <div
      class="w-full max-w-[1440px] mx-auto bg-[#E0E8FF] h-screen max-h-[900px] shadow relative grid place-items-center p-1"
    >
      <bg-screen class="absolute top-0 left-0" />
      <div class="bg-white rounded-[20px] relative max-w-[450px]">
        <div><bg-header /></div>
        <div class="px-2 sm:px-12 pt-11 pb-12">
          <h2
            class="font-black text-[28px] leading-[37px] text-center text-[#1f2e55]"
          >
            Order Summary
          </h2>
          <p
            class="mt-4 font-medium text-[16px] leading-[26px] text-center text-[#717fa6]"
          >
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div
            class="flex flex-wrap place-items-center justify-between mt-5 p-6 bg-[#F7F9FF] rounded-xl"
          >
            <div class="flex flex-wrap place-items-center flex-grow">
              <div
                class="w-12 h-12 bg-[#DFE6FB] rounded-full grid place-items-center mr-5"
              >
                <icon-music />
              </div>
              <div>
                <div class="font-black text-[#1F2E55]">Annual Plan</div>
                <div class="text-[#717FA6]">$59.99 Year</div>
              </div>
            </div>
            <div
              class="text-[#382AE1] font-bold underline mx-auto cursor-pointer"
            >
              Change
            </div>
          </div>

          <button
            class="w-full py-3 mt-8 bg-[#382ae1] hover:bg-[#342b9c] transition-colors shadow-[0px_20px_20px_rgba(56,42,225,0.190291)] rounded-[11px] font-black text-[15px] leading-[20px] text-white"
          >
            Proceed to Payment
          </button>
          <button
            class="mt-8 text-[#717FA6] font-black text-center block mx-auto"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BgScreen from "./components/bg-screen.vue";
import BgHeader from "./components/bg-header.vue";
import IconMusic from "./components/icon-music.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Red+Hat+Display:wght@500;900&display=swap");

.font-red-hat-display {
  font-family: "Red Hat Display";
  font-style: normal;
}
</style>
