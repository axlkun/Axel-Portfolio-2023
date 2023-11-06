<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Proyectos</h1>
            </v-sheet>
        </v-sheet>

        <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column" v-if="loading">
            <v-row class="pt-md-6">
                <v-col cols="12" md="6">
                    <v-skeleton-loader height="500" type="image, article, chip"></v-skeleton-loader>
                </v-col>
                <v-col cols="12" md="6">
                    <v-skeleton-loader height="500" type="image, article, chip"></v-skeleton-loader>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-skeleton-loader height="350" type="image, article, chip"></v-skeleton-loader>
                </v-col>
                <v-col cols="12" md="6">
                    <v-skeleton-loader height="350" type="image, article, chip"></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-sheet>

        <project-list :projectsList="projects" v-else></project-list>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import api from '../api';

import projectList from '../components/ProjectsList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    components: {
        contactSection,
        projectList
    },

    data: () => ({

        projects: [],
        loading: true
    }),

    methods: {
        getProjects() {
            api.get('/api/projects')
                .then(response => {
                    this.projects = response.data.data;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                })
                .finally(() => {
                    this.loading = false; // Desactiva el estado de carga después de la solicitud
                });
        }
    },

    mounted() {
        this.getProjects();
    }
}

</script>

<style scoped>
.projects {
    background-color: var(--primary-background);
}

.skeleton {
    background-color: var(--primary-background);
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
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