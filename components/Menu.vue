<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-yoga-orange">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Kinderyoga</span>
            <img class="h-10 w-auto text-yoga-orangetext" src="~/assets/img/meditation.svg" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-yoga-orangetext hover:text-yoga-redtext">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-yoga-orangetext hover:text-yoga-redtext">
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: 'Kinderyoga', href: '#' },
  { name: 'Kurse', href: '#' },
  { name: 'Über mich', href: '#' },
  { name: 'Kontakt', href: '#' },
]

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>