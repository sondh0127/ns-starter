<script lang="ts" setup>
import { Slot } from 'radix-vue'

defineProps<{
  span?: number
  title: string
  icon: string
  center?: boolean
}>()
</script>

<template>
  <div class="col-span-[var(--span)] grid items-start rounded-2xl bg-gray-100 dark:bg-trueGray-800 px-10 py-8"
    :style="{ '--span': span ?? 1 }" :class="[center ? 'justify-items-center' : 'justify-items-start']">
    <NuxtImg class="h-70px mb-2 w-70px border border-primary-300/50 rounded-lg object-scale-down p-1" :src="icon" />
    <h6>{{ title }}</h6>
    <Slot class="text-balance text-center">
      <slot />
    </Slot>
  </div>
</template>
