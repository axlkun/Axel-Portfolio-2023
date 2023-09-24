<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Blog</h1>
            </v-sheet>  
        </v-sheet>

        <articlestList :blogEntry="blogEntry"></articlestList>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>

import articlestList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    components: {
        contactSection,
        articlestList
    },

    data: () => ({
      blogEntry: [
            {
                title: "Cómo hacer un portafolio",
                link: "/blog/como-hacer-un-portafolio",
                description: "Conoce los puntos clave para crear un excelente portafolio web",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "Construyendo Unfollowers Tracker",
                link: "/blog/construyendo-unfollowers-tracker",
                description: "Como es construir una aplicacion web para monetizar",
                tags: ["Startup", "Adsense", "Web", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "Proyectos para aprender Vue",
                link: "/blog/proyectos-para-aprender-vue",
                description: "Conoce 10 proyectos reales para prácticar tus conocimientos en Vue",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "Hablemos sobre ChatGPT",
                link: "/blog/hablemos-sobre-Chatgpt",
                description: "Como sacarle el máximo provecho a esta herramienta IA",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
            {
                title: "¿Cual framework para frontend debo aprender?",
                link: "/blog/cual-framework-para-frontend-debo-aprender",
                description: "Mira esta guía para decidirte por un framework y empieza a aprender ya",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                date: "10/10/2023"
            },
        ]
    }) 
}

</script>

<style scoped>
.projects {
    min-height: 100vh;
    background-color: var(--background-grey);
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
}

.title {
    font-size: 35px;
    font-weight: 400;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-blue);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        font-weight: 400;
        text-align: start;
    }

}
</style>