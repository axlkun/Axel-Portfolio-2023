<template>
    <v-sheet class="project">

        <v-sheet class="container">

            <v-sheet class="img-container">
                <img :src="`http://127.0.0.1:8000${project.imageUrl}`" alt="Imagen About Me" v-lazy/>
            </v-sheet>

            <v-sheet class="description-container">
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1> {{ project.title }}</h1>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip v-for="technologie in project.technologies" class="mr-2 mb-2" color="#0801ff">
                                {{ technologie }}
                            </v-chip>
                        </v-sheet>

                        <v-sheet class="description" v-html="project.description"></v-sheet>
                    </v-sheet>

                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Compañía / Cliente</h3>
                            <p> {{ project.company }}</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Rol</h3>
                            <p>Fullstack Developer</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Ver código</h3>
                            <a>
                                {{ project.repo_link ? project.repo_link : 'Repositorio privado' }}
                            </a>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Visitar el sitio</h3>
                            <a>
                                {{ project.website_link ? project.website_link : 'Despliegue no disponible' }}
                            </a>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>


        </v-sheet>

        <relatedProjects :projectsList="projects"></relatedProjects>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import api from '../api';

import relatedProjects from '../components/RelatedProjects.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    name: 'project',

    props: ['slug'],

    components: {
        relatedProjects,
        contactSection
    },

    data: () => ({

        project: [],
        projects: []
    }),

    methods: {
        getProject() {
            api.get(`/api/projects/${this.slug}`)
                .then(response => {
                    this.project = response.data.data;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                });
        },

        getRelatedProjects(){
            api.get(`/api/related-projects/${this.slug}`)
                .then(response => {
                    this.projects = response.data.data;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                });
        }
    },

    mounted() {
        this.getProject();
        this.getRelatedProjects();
    }

}
</script>

<style scoped>
.project {
    background-color: var(--primary-background);
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        max-width: 90%;
        flex-direction: column-reverse;
    }
}

.container * {
    background: inherit;
}

.title {
    font-size: 35px;
    font-weight: bold;
    color: var(--primary-blue);
    text-align: start;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;

    }

}

.img-container {

    width: 100%;
    background-color: var(--primary-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 60px;
        min-height: 90vh;

    }
}

.img-container img {
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        width: 80%;
    }
}

.description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;

    @media only screen and (min-width: 1024px) {
        margin-top: 30px;
    }

}

.project-data {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 30px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 20px;

    }
}

.project-description {
    flex: 70%;
}

.project-info {
    flex: 30%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 15px;

    @media only screen and (min-width: 1024px) {

        align-items: center;
    }
}

.link-container {
    width: 200px;
}

.project-info h3 {
    color: var(--primary-blue);
}

.link {
    text-decoration: underline;
}
</style>