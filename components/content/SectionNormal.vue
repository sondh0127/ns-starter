<script lang="ts" setup>

</script>

<template>
  <section>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </section>
</template>
