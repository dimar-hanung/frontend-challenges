<template>
  <span :class="badgeClass">
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "outline-primary",
        "outline-secondary",
        "outline-success",
        "outline-danger",
        "outline-warning",
        "outline-info",
      ].includes(value),
  },
});

const variantClasses = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-teal-500 text-white",
  "outline-primary": "border-2 bg-white border-blue-500 text-blue-500",
  "outline-secondary": "border-2 bg-white border-gray-500 text-gray-500",
  "outline-success": "border-2 bg-white border-green-500 text-green-500",
  "outline-danger": "border-2 bg-white border-red-500 text-red-500",
  "outline-warning": "border-2 bg-white border-yellow-500 text-yellow-500",
  "outline-info": "border-2 bg-white border-teal-500 text-teal-500",
};

const badgeClass = computed(() => {
  return `${
    variantClasses[props.variant]
  } px-3 py-1 rounded-full text-sm font-bold`;
});
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
