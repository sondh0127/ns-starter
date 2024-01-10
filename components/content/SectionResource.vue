<script lang="ts" setup>
const { path } = definePropsRefs<{ path: string }>()
const item = computed(() => { })
</script>

<template>
  <swiper-slide>
    <ResourceItem class="h-full" :item="item" />
  </swiper-slide>
  <swiper-slide>
    <ResourceItem class="h-full" :item="item" />
  </swiper-slide>
</template>
