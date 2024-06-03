<template>
  <label :class="wrapperClass">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
      :class="checkboxClass"
    />
    <span :class="badgeClass">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from "vue";

interface Props {
  modelValue: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
``;
const primaryClass = "border-2 border-blue-500 text-blue-500 bg-white shadow";
const secondaryClass =
  "border-2 border-gray-500 text-gray-500 hover:border-blue-500 hover:text-blue-500";

const badgeClass = computed(() => {
  return `${
    props.modelValue ? primaryClass : secondaryClass
  } px-3 py-1 rounded-full text-sm flex items-center justify-center font-bold transition-all cursor-pointer`;
});

const wrapperClass = "flex items-center ";
const checkboxClass = "hidden";
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
