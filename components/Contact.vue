<template>
  <div class="relative bg-white">
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
       <div class="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <img class="rounded-lg shadow-lg object-cover object-center" src="~/assets/img/ganesha-messing.jpg" alt="Whitney leaning against a railing on a downtown street" />
        </div>
      </div>
      <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="font-chalkduster text-2xl font-extrabold tracking-tight text-yoga-brand sm:text-3xl">
            Kontakt
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Fragen, Wünsche, Anregungen? <br/>
            Wir freuen uns über jeden Kontakt.
          </p>
    
          <dl class="mt-8 text-base text-gray-500">
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">
                  claudia@kinderyoga-badhomburg.de
                </span>
              </dd>
            </div>
          </dl>
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