<template>
    <v-sheet class="works" id="projects">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
        </v-sheet>

        <v-sheet class="work-container">

            <v-card v-for="project in projects" :key="project.name" color="#0052faff" variant="text" class="custom-card">
                <v-img :src="project.image" cover :aspect-ratio="16 / 8">
                </v-img>
                <v-card-title class="flex-column align-start">
                    <div class="project-name">
                        {{ project.name }}
                    </div>
                    <div class="text-grey mt-1 mb-1 project-description text-visible">
                        {{ project.description }}
                    </div>
                    <div class="d-flex align-center">
                        <v-icon :class="project.icon" contain></v-icon>

                        <span class="text-grey ml-1 project-type">{{ project.type }}</span>
                    </div>
                </v-card-title>

                <v-divider class="mx-4"></v-divider>

                <v-card-text class="d-flex flex-wrap justify-start">
                    <v-chip v-for="stack in project.stack" class="mr-2 mb-2">
                        {{ stack }}
                    </v-chip>
                </v-card-text>
            </v-card>

        </v-sheet>

        <v-sheet class="button-container">
            <a href="/work" class="button">Ver mas proyectos <span class="mdi mdi-arrow-right-thin"></span></a>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgUnfollowers from '../assets/UnfollowersTracker.png';
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png';
import imgCargaDatastageWldx from '../assets/CargaDatastageWelldex.png';
import imgAutorizacionCheques from '../assets/AutorizacionCheques.png';
import imgValidacionExpedientes from '../assets/welldex-logo.jpeg';

export default {

    name: 'workSection',

    data: () => ({
        imgUnfollowers,
        imgCargaDatastageGral,
        imgCargaDatastageWldx,
        imgAutorizacionCheques,
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
    }),

}
</script>

<style scoped>
.works {
    /*min-height: 100vh;*/
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

.work-container {
    margin: 30px auto;
    width: 90%;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;
    /* Establece una columna por defecto */

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        /* Cambia a dos columnas en pantallas más grandes */
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
    }
}

.project-name{
    font-size: 16px;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}
.project-description{
    font-size: 16px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}
.project-type{
    font-size: 14px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
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

    &:hover{
        opacity: 0.9;
    }

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}

.custom-card {
    transition: transform 0.3s, filter 0.3s;

    &:hover {
        
        cursor: pointer;
        transform: scale(1.01);
        filter: brightness(0.9);
    }

}

</style>