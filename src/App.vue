<template>
  <v-app id="app">

    <myHeader></myHeader>
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>
    <myFooter :blogEntry="blogEntry"></myFooter>
  </v-app>
</template>

<script>
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
import './style.css?inline';

export default{
  
  components : {
    myHeader,
    myFooter
  },

  data: () => ({
      blogEntry: [
            {
                title: "Cómo hacer un portafolio",
                link: "/blog/como-hacer-un-portafolio",
                description: "Conoce los puntos clave para crear un excelente portafolio web",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Construyendo Unfollowers Tracker",
                link: "/blog/construyendo-unfollowers-tracker",
                description: "Como es construir una aplicacion web para monetizar",
                tags: ["Startup", "Adsense", "Web", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Proyectos para aprender Vue",
                link: "/blog/proyectos-para-aprender-vue",
                description: "Conoce 10 proyectos reales para prácticar tus conocimientos en Vue",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Hablemos sobre ChatGPT",
                link: "/blog/hablemos-sobre-Chatgpt",
                description: "Como sacarle el máximo provecho a esta herramienta IA",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            }
        ]
    })
}

</script>

<style scoped>

</style>
