
<template>
  <div class="bg-yoga-lightyellow">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="font-chalkduster mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yoga-brand sm:text-4xl">Kinderyoga</h2>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img class="rounded-lg shadow-lg object-cover object-center" src="~/assets/img/strand.jpg" alt="" width="768" height="1024" />
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