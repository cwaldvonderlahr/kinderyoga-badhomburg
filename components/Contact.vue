<template>
  <div id="kontakt" class="relative bg-white">
    <div class="relative max-w-7xl mx-auto py-4 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div class="aspect-w-12 aspect-h-10 lg:aspect-none">
              <img
                class="rounded-lg object-cover object-center"
                width="655"
                height="546"
                src="~/assets/img/ganesha-messing.jpg"
                alt="Messing Ganesha"
                loading="lazy"
              />
            </div>
          </figure>
        </div>

        <div class="mt-8 lg:mt-0">
          <div class="max-w-prose mx-auto lg:max-w-none">
            <h2
              class="font-chalkduster text-2xl font-extrabold tracking-tight text-yoga-brand sm:text-3xl"
            >
              Kontakt
            </h2>
          </div>
          <div class="mt-6">
           <div class="max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg leading-6 text-gray-500">
                Fragen, Wünsche, Anregungen? <br />
                Wir freuen uns über jeden Kontakt.
              </p>

              <dl class="mt-8 text-base text-gray-500">
                <div class="mt-3">
                  <dt class="sr-only">Email</dt>
                  <dd class="flex">
                    <MailIcon
                      class="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-3"> claudia@kinderyoga-badhomburg.de </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MailIcon,
  },
};
</script>
