<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Proyectos</h1>
            </v-sheet>

            <v-sheet class="work-container">

                <v-card v-for="project in projects" :key="project.name" color="#0052faff" variant="text"
                    class="custom-card">
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
        </v-sheet>
        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import imgUnfollowers from '../assets/UnfollowersTracker.png';
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png';
import imgCargaDatastageWldx from '../assets/CargaDatastageWelldex.png';
import imgAutorizacionCheques from '../assets/AutorizacionCheques.png';
import imgValidacionExpedientes from '../assets/welldex-logo.jpeg';
import imgIndicadoresCREA from '../assets/IndicadoresCREA.png';
import imgInventarioAyuntamiento from '../assets/InventarioAyuntamiento.png';
import imgBienesRaices from '../assets/BienesRaices.png';
import imgReportePNC from '../assets/ReportePNC.png';

import contactSection from '../components/ContactSection.vue';

export default {

    components: {
        contactSection
    },

    data: () => ({

        imgUnfollowers,
        imgCargaDatastageGral,
        imgCargaDatastageWldx,
        imgAutorizacionCheques,
        imgValidacionExpedientes,
        imgIndicadoresCREA,
        imgInventarioAyuntamiento,
        imgBienesRaices,
        imgReportePNC,

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
            },
            {
                name: "Autorización de Cheques",
                description: "Módulo que permite a cada ejecutivo por aduana autorizar pagos a terceros",
                type: "Welldex Internacional",
                stack: ["Vue", "Vuetify", "PHP", "MySQL", "SQLServer"],
                image: imgAutorizacionCheques,
                icon: "mdi mdi-domain"
            },
            {
                name: "Indicadores CREA",
                description: "Módulo que permite a los ejecutivos monitorear el rendimiento del departamento CREA",
                type: "Welldex Internacional",
                stack: ["Vue", "Vuetify", "PHP", "MySQL", "SQLServer"],
                image: imgIndicadoresCREA,
                icon: "mdi mdi-domain"
            },
            {
                name: "Inventario Ayuntamiento",
                description: "Aplicación web para gestionar operaciones y recursos del departamento de sistemas del ayuntamiento.",
                type: "H. Ayuntamiento de Álamo",
                stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                image: imgInventarioAyuntamiento,
                icon: "mdi mdi-domain"
            },
            {
                name: "Bienes Raices",
                description: "Sitio web con panel de administración",
                type: "Proyecto pripio",
                stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                image: imgBienesRaices,
                icon: "mdi mdi-folder-heart-outline"
            },
            {
                name: "Reporte PNC",
                description: "Módulo que permite a los ejectivos conocer los detalles y la estadística de las operaciones que fueron etiquetadas como PNC en aduana",
                type: "Welldex Internacional",
                stack: ["Vue", "Vuetify", "PHP", "MySQL", "SQLServer"],
                image: imgReportePNC,
                icon: "mdi mdi-domain"
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

.work-container {
    margin-top: 30px;
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

.custom-card {
    transition: transform 0.3s, filter 0.3s;

    &:hover {

        cursor: pointer;
        transform: scale(1.01);
        filter: brightness(0.9);
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
    line-height: 1.2;
}
</style>