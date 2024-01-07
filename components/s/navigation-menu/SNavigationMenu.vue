<script setup lang="ts">
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
} from 'radix-vue'
import SNavigationMenuViewport from './SNavigationMenuViewport.vue'

const props = defineProps<NavigationMenuRootProps>()

const emits = defineEmits<NavigationMenuRootEmits>()
</script>

<template>
  <NavigationMenuRoot
    v-bind="props"
    class="relative z-100 flex flex-1 items-center justify-center"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
    <SNavigationMenuViewport />
  </NavigationMenuRoot>
</template>
