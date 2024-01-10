<script lang="ts" setup>
const { path } = definePropsRefs<{ path: string }>()
const { data } = await useAsyncData(`section-resource-item:${path.value}`, () => queryContent('resources').where({
  _path: {
    $eq: path.value
  }
}).find())
const item = computed(() => data.value?.[0])

</script>

<template>
  <swiper-slide v-if="item">
    <ResourceItem v-if="item.type === 'resource'" :item="item" />
    <BlogItem v-else :item="item" />
  </swiper-slide>
</template>
