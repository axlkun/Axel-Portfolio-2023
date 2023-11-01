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
import api from '../api';

import articlestList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    components: {
        contactSection,
        articlestList
    },

    data: () => ({
        blogEntry: []
    }),

    methods: {
        getArticles() {
            api.get('/api/articles')
                .then(response => {
                    this.blogEntry = response.data.data;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                });
        }
    },

    mounted() {
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