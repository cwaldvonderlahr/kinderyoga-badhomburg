<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="hidden lg:flex w-full py-2 items-center justify-between lg:border-none"
      >
        <div class="flex items-center">
          <div class="ml-10 space-x-8">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-base font-medium text-yoga-orangetext hover:text-yoga-redtext"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-yoga-orangetext hover:text-yoga-redtext"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: "Kurse", href: "#" },
  { name: "Über mich", href: "#" },
  { name: "Kontakt", href: "#" },
];

export default {
  setup() {
    return {
      navigation,
    };
  },
};
</script>
