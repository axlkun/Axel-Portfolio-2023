<template>
    <v-sheet class="works" id="projects">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
        </v-sheet>

        <project-list :projectsList="projects"></project-list>

        <v-sheet class="button-container">
            <a href="/work" class="button">Ver mas proyectos <span class="mdi mdi-arrow-right-thin"></span></a>
        </v-sheet>
    </v-sheet>
</template>

<script>

import projectList from './ProjectsList.vue';

import imgUnfollowers from '../assets/UnfollowersTracker.png';
import imgValidacionExpedientes from '../assets/welldex-logo.jpeg';
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png';
import imgCargaDatastageWldx from '../assets/CargaDatastageWelldex.png';

export default {

    name: 'workSection',

    components: {
        projectList
    },

    data: () => ({

        imgUnfollowers,
        imgCargaDatastageGral,
        imgCargaDatastageWldx,
        imgValidacionExpedientes,

        projects: [
            {
                name: "Unfollowers Tracker",
                description: "Aplicación web para conocer quien no te sigue de vuelta en Instagram",
                type: "Proyecto propio",
                stack: ["Vue", "Vuetify", "Laravel", "MySQL"],
                image: imgUnfollowers,
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
            },
            {
                name: "Carga Datastage Welldex",
                description: "Módulo que permite subir el Datastage de la empresa a BigQuery",
                type: "Welldex Internacional",
                stack: ["Vue", "Vuetify", "PHP", "MySQL", "BigQuery"],
                image: imgCargaDatastageWldx,
                icon: "mdi mdi-domain"
            }
        ]
    })

}
</script>

<style scoped>
.works {
    background-color: var(--background-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-container {
    font-size: 35px;
    width: 90%;
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    font-weight: bold;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
    }
}

.button-container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background: transparent;

    @media only screen and (min-width: 1024px) {
        width: 90%;
        flex-direction: row;
        justify-content: flex-end;
    }
}

.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;

    &:hover {
        opacity: 0.9;
    }

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}
</style>