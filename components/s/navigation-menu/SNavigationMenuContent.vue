<script setup lang="ts">
import {
  NavigationMenuContent,
  type NavigationMenuContentEmits,
  type NavigationMenuContentProps,
  useEmitAsProps,
} from 'radix-vue'

const props = defineProps<NavigationMenuContentProps & { class?: string }>()

const emits = defineEmits<NavigationMenuContentEmits>()
</script>

<template>
  <NavigationMenuContent
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    :class="'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto'"
  >
    <slot />
  </NavigationMenuContent>
</template>
