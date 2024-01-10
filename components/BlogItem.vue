<script lang="ts" setup>

const { item } = definePropsRefs<{
  item: any
}>()
</script>

<template>
  <div class="group bg-gray-100/75 dark:bg-gray-900/75">
    <div
      class="overflow-hidden relative aspect-16/9 block rounded-md transition-all duration-300 hover:scale-105 dark:bg-gray-800">
      <template v-if="item?.thumbnail">
        <NuxtImg :src="item.thumbnail" />
      </template>
      <template v-else>
        <div class="flex-center size-full inset-0 absolute">
          <Icon :name="item.icon ?? 'i-ri:image-fill'" class="w-50% h-50% text-primary/75" />
        </div>
      </template>
    </div>

    <div>
      <div class="p-2">
        <!-- TODO: tags -->
        <!-- <BlogsTagsLabel :categories="item.tags" /> -->
        <NuxtLink class="text-lg font-semibold leading-snug tracking-tight dark:text-white" :class="{
        }" :to="item._path">
          <span
            class="transition-[background-size] cursor-default bg-[length:0px_10px] from-primary-300 to-primary-200 bg-gradient-to-r bg-left-bottom bg-no-repeat duration-500 hover:bg-[length:100%_10px] hover:bg-[length:100%_3px] dark:from-primary-600 dark:to-primary-700">
            {{ item.title }}
          </span>
        </NuxtLink>

        <div class="mb-2 mt-3 flex items-center text-gray-500 space-x-3 dark:text-gray-400">
          <!-- TODO: author -->
          <!-- <NuxtLink to="#">
            <div class="flex items-center gap-3">
              <div class="relative h-32px w-32px flex-shrink-0">
                <NuxtImg v-if="item?.author?.image"
                  class="absolute inset-0 h-full w-full rounded-full object-cover" :src="item?.author?.image.asset._ref"
                  :alt="item?.author?.name" sizes="xs:32px" fit="cover" />
              </div>
              <div>
                <span class="truncate text-sm">
                  {{ item.author.name }}

                </span>
                <template v-if="item.author.bio">
                  <SSanityContent class="text-xs [&_p]:!my-0" :blocks="item.author.bio" />
                </template>
              </div>
            </div>
          </NuxtLink> -->
          <!-- <span class="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time class="truncate text-sm" :datetime="item?.publishedAt || item._createdAt">
            {{ useDateFormat(item?.publishedAt || item._createdAt, 'MMMM D, YYYY').value }}
          </time> -->
        </div>
      </div>
    </div>
  </div>
</template>
