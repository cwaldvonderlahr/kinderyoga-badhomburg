
<template>
  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base text-yoga-orange font-semibold tracking-wide uppercase">Das Beste für die Kleinsten</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yoga-red sm:text-4xl">Kinderyoga</h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img class="rounded-lg shadow-lg object-cover object-center" src="~/assets/img/ganesha.jpg" alt="" width="768" height="1024" />
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-500">Der Alltag von Kindern ist heute oft geprägt von Stress, Hektik und langem Sitzen. Ruhe, Entspannung und Bewegung kommen meistens zu kurz. Ständige Reizüberflutung und technische Geräte sorgen außerdem dafür, dass Kinder sich schlecht konzentrieren und zur inneren Ruhe finden können. Einen Ausgleich hierzu kann Kinderyoga schaffen. Spielerisch werden die Kinder an Atem-, Bewegungs- und Entspannungsübungen herangeführt und finden so eine Insel der Ruhe zwischen all den Anforderungen, die täglich an sie gestellt werden.</p>
          </div>
          <div class="mt-8 max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-500">Yoga für Kinder unterrichte ich mit einer bunten Mischung aus Bewegung, Spiel, Yogapositionen, Liedern, Stille, Achtsamkeit, bewußter Wahrnehmung, Atmung und Entspannung. Die Kinder kommen so ganz bei sich an und nehmen die Ruhe, Freude und Wärme mit in ihren Alltag.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CameraIcon } from '@heroicons/vue/solid'

export default {
  components: {
    CameraIcon,
  },
}
</script>