<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="hidden lg:flex w-full py-4 items-center justify-between lg:border-none"
      >
        <div class="flex items-center">
          <div class="space-x-10">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-base font-medium text-yoga-orangetext hover:text-yoga-orange"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-8 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-yoga-orangetext hover:text-yoga-orange"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: "Kurse", href: "/#kurse" },
  { name: "Über mich", href: "/#ueber-mich" },
  { name: "Kontakt", href: "/#kontakt" },
];

export default {
  setup() {
    return {
      navigation,
    };
  },
};
</script>
