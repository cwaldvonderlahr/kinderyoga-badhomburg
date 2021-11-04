<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Kontakt
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Fragen, Wünsche, Anregungen? <br/>
            Wir freuen uns über jeden Kontakt.
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Adresse</dt>
              <dd>
                <p>Gummibärenstr. 21</p>
                <p>12345 Yogaland</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Telefon</dt>
              <dd class="flex">
                <PhoneIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">
                  +49 123 456 7890
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">
                  kontakt@kinderyoga-badhomburg.de
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <img class="rounded-lg shadow-lg object-cover object-center" src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/outline'

export default {
  components: {
    MailIcon,
    PhoneIcon,
  },
}
</script>