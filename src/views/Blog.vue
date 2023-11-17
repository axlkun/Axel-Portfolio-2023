<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Blog</h1>
            </v-sheet>
        </v-sheet>

        <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column" v-if="loading" color="#f5f1f1">
            <template v-for="rowIndex in 2">
              <v-row :class="rowIndex === 1 ? 'pt-md-10' : ''" >
                <template v-for="colIndex in 3">
                  <v-col cols="12" md="4">
                    <v-skeleton-loader :height="rowIndex == 1 ? 500 : 400" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
                  </v-col>
                </template>
              </v-row>
            </template>
          </v-sheet>

        <articlestList :blogEntry="blogEntry" v-else></articlestList>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import api from '../api';
import { useSeoMeta } from '@unhead/vue';
import articlestList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    name: 'blog',

    components: {
        contactSection,
        articlestList
    },

    data: () => ({
        blogEntry: [],
        loading: true
    }),

    methods: {
        getArticles() {
            api.get('/api/articles')
                .then(response => {
                    
                    if (response.status === 200) {
                        this.blogEntry = response.data.data;
                    } else {
                        console.error('Respuesta no exitosa:', response);
                        this.$router.push('/');
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                    this.$router.push('/');
                })
                .finally(() => {
                    this.loading = false; // Desactiva el estado de carga después de la solicitud
                });
        }
    },

    created() {
        useSeoMeta({
            title: 'Axel Cruz | Blog',
            description: 'En este blog encontrarás todo sobre el desarrollo de SideProjects, Startups, noticias de tecnología, guías sobre programación y mucho más, escrito por Axel Cruz, Ingeniero en Sistemas y programador fullstack en México.',
            keywords: 'startup, solopreneur, sideproject, programador, fullstack developer, laravel, vuejs, php, diseño web, experiencia de usuario'
        });
        this.getArticles();
    }
}

</script>

<style scoped>
.projects {
    background-color: var(--primary-background);
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