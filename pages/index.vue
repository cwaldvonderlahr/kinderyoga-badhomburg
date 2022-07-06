<template>
  <div>
    <Header />
    <Menu />
    <Yoga />
    <About />
    <Courses />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
useHead({
  title: 'Kinderyoga Bad Homburg | Claudia Röske',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
      lang: 'de'
    },
  meta: [
    { name: 'description', content: 'Kinderyoga-Kurse für Kinder von 4-12 Jahren in Bad Homburg, Oberursel, Hochtaunuskreis und Frankfurt.',},
    { name: "robots", content: "index" },
    
    { name: "og:url", content: "https://kinderyoga-badhomburg.de/" },
    { name: "og:title", content: "Kinderyoga Bad Homburg | Claudia Röske" },
    { name: "og:description", content: "Kinderyoga-Kurse für Kinder von 4-12 Jahren in Bad Homburg, Oberursel, Hochtaunuskreis und Frankfurt." },
    { name: "og:image", content: "https://kinderyoga-badhomburg.de/img/kinderyoga-badhomburg.jpg" },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    { name: "og:image:type", content: "image/jpeg" },
    { name: "og:image:alt", content: "Kinderyoga-Kurse für Kinder von 4-12 Jahren in Bad Homburg, Oberursel, Hochtaunuskreis und Frankfurt." },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "de_DE" },

    { name: "twitter:card", content: "summary_large_image"},
    { property: "twitter:domain", content: "kinderyoga-badhomburg.de"},
    { property: "twitter:url", content: "https://kinderyoga-badhomburg.de/"},
    { name: "twitter:title", content: "Kinderyoga Bad Homburg | Claudia Röske"},
    { name: "twitter:description", content: "Kinderyoga-Kurse für Kinder von 4-12 Jahren in Bad Homburg, Oberursel, Hochtaunuskreis und Frankfurt."},
    { name: "twitter:image", content: "https://kinderyoga-badhomburg.de/img/kinderyoga-badhomburg.jpg"},
    { name: "twitter:image:alt", content: "Kinderyoga-Kurse für Kinder von 4-12 Jahren in Bad Homburg, Oberursel, Hochtaunuskreis und Frankfurt."},
  ],
})
</script>
