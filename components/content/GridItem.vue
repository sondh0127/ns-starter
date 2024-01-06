<script lang="ts" setup>
defineProps<{
  span?: number
}>()
</script>

<template>
  <div class="col-span-[var(--span)]" :style="{ '--span': span ?? 1 }">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
