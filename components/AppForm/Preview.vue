<template>
  <div class="h-screen hidden lg:grid place-items-center bg-[#c198ab]/50">
    <div
      class="h-[670px] mb-8 w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-[#723456] overflow-hidden"
    >
      <templates-simple :acc="data" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
