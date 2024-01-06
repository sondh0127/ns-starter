<script setup lang="ts">
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100dvh;
  font-family: 'Inter', sans-serif;
  @apply p-0 m-0 antialiased text-secondary;
}

:root {
  --background: 0, 0%, 100%;
  --foreground: 222.2 47.4% 11.2%;

  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;

  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;

  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;

  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;

  --primary: 27 98% 56%;
  --primary-foreground: 210 40% 98%;

  --secondary: 215 27.91% 16.86%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;

  --destructive: 0 100% 50%;
  --destructive-foreground: 210 40% 98%;

  --ring: 215 20.2% 65.1%;

  --radius: 0.5rem;
}

html.dark {
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;

  --muted: 223 47% 11%;
  --muted-foreground: 215.4 16.3% 56.9%;

  --accent: 216 34% 17%;
  --accent-foreground: 210 40% 98%;

  --popover: 224 71% 4%;
  --popover-foreground: 215 20.2% 65.1%;

  --border: 216 34% 17%;
  --input: 216 34% 17%;

  --card: 224 71% 4%;
  --card-foreground: 213 31% 91%;

  --primary: 27, 98%, 56%;
  --primary-foreground: 210, 40%, 98%;

  --secondary: 217.89 10.61% 64.9%;
  --secondary-foreground: 210 40% 98%;

  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;

  --ring: 216 34% 17%;

  --radius: 0.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply leading-snug lg:leading-tight xl:!leading-tight tracking-tight text-gray-800 dark:text-white;
}

h1 {
  @apply mt-3 text-4xl font-700 lg:text-5xl xl:text-6xl;
}

h2 {
  @apply mt-3 text-4xl font-700 lg:text-5xl;
}

h3 {
  @apply mt-3 text-3xl font-700 lg:text-4xl;
}

h4 {
  @apply mt-3 text-2xl font-600 lg:text-3xl;
}

h5 {
  @apply mt-3 text-xl font-600 lg:text-2xl;
}

h6 {
  @apply mt-3 text-lg font-500 lg:text-xl;
}

p, ul, ol, pre {
  @apply my-1em mx-0 leading-[1.75];
}
</style>
