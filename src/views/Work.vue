<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Proyectos</h1>
            </v-sheet>
        </v-sheet>

        <project-list :projectsList="projects"></project-list>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>

import projectList from '../components/ProjectsList.vue';
import contactSection from '../components/ContactSection.vue';

import imgUnfollowers from '../assets/UnfollowersTracker.png';
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png';
import imgCargaDatastageWldx from '../assets/CargaDatastageWelldex.png';
import imgAutorizacionCheques from '../assets/AutorizacionCheques.png';
import imgValidacionExpedientes from '../assets/welldex-logo.jpeg';
import imgIndicadoresCREA from '../assets/IndicadoresCREA.png';
import imgInventarioAyuntamiento from '../assets/InventarioAyuntamiento.png';
import imgBienesRaices from '../assets/BienesRaices.png';
import imgReportePNC from '../assets/ReportePNC.png';

export default {

    components: {
        contactSection,
        projectList
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
            }

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