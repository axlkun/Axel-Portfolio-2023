<template>
    <v-sheet class="project">

        <v-sheet class="container">

            <v-sheet class="img-container">
                <img :src="imgUnfollowersTracker" alt="Imagen About Me" loading="lazy" />
            </v-sheet>

            <v-sheet class="description-container">
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1>Unfollowers Tracker</h1>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip class="mr-2 mb-2" color="#0801ff">
                                Vue
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="#0801ff">
                                Vuetify
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="#0801ff">
                                Laravel
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="#0801ff">
                                MySQL
                            </v-chip>
                        </v-sheet>

                        <v-sheet class="description">
                            <p>Oyster launched a brand awareness campaign and microsite at the beginning of Q3 2023. The
                                site
                                features an interactive quiz asking visitors "What's your workstyle?", and also includes
                                profiles of Oyster employees highlighting who they are outside of work. I designed and art
                                directed the sub-brand identity of the campaign including the wordmark, color palette, and
                                general visual language. I also designed the microsite in its entirety, as well produced all
                                the
                                various campaign assets for paid media, organic social, and lifecycle assets.</p>
                            <p>Oyster launched a brand awareness campaign and microsite at the beginning of Q3 2023. The
                                site
                                features an interactive quiz asking visitors "What's your workstyle?", and also includes
                                profiles of Oyster employees highlighting who they are outside of work. I designed and art
                                directed the sub-brand identity of the campaign including the wordmark, color palette, and
                                general visual language. I also designed the microsite in its entirety, as well produced all
                                the
                                various campaign assets for paid media, organic social, and lifecycle assets.</p>
                        </v-sheet>
                    </v-sheet>

                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Compañía / Cliente</h3>
                            <p>Proyecto propio</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Rol</h3>
                            <p>Fullstack Developer</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Ver código</h3>
                            <p class="link">codigo.com</p>
                            <p class="link">codigo2.com</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Visitar el sitio</h3>
                            <p class="link">unfollowerstracker.com</p>
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
import relatedProjects from '../components/RelatedProjects.vue';
import contactSection from '../components/ContactSection.vue';

import imgUnfollowersTracker from '../assets/UnfollowersTracker.png'
import imgValidacionExpedientes from '../assets/welldex-logo.jpeg'
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png'

export default {

    components: {
        relatedProjects,
        contactSection
    },

    data: () => ({

        imgUnfollowersTracker,
    
        projects: [
            {
                name: "Unfollowers Tracker",
                description: "Aplicación web para conocer quien no te sigue de vuelta en Instagram",
                type: "Proyecto propio",
                stack: ["Vue", "Vuetify", "Laravel", "MySQL"],
                image: imgUnfollowersTracker,
                icon: "mdi mdi-folder-heart-outline"
            },
            {
                name: "API Validación de Expedientes",
                description: "API para validar y verificar expedientes de operaciones aduaneras",
                type: "Welldex Internacional",
                stack: ["PHP", "Python", "MySQL", "SQLServer", "CloudStorage"],
                image: imgValidacionExpedientes,
                icon: "mdi mdi-domain"
            },
            {
                name: "Carga Datastage General",
                description: "Módulo que permite subir el Datastage nacional a BigQuery",
                type: "Welldex Internacional",
                stack: ["Vue", "Vuetify", "PHP", "MySQL", "BigQuery"],
                image: imgCargaDatastageGral,
                icon: "mdi mdi-domain"
            }
        ]
    }),

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