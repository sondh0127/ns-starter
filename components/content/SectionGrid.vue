<script lang="ts" setup>
const { col } = definePropsRefs<{
  col?: string
  gap?: string
  bg?: boolean
}>()
</script>

<template>
  <section :style="{ '--col': col ?? 2, '--gap': gap ? gap + 'px' : '32px' }"
    class="grid grid-cols-[repeat(var(--col),minmax(0,1fr))] gap-[var(--gap)] py-3"
    :class="[bg ? 'bg-gray-100 dark:bg-trueGray-800 rounded-xl' : '']">
    <slot />
  </section>
</template>
