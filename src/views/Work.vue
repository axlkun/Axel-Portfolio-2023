<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Proyectos</h1>
            </v-sheet>

            
        </v-sheet>

        <project-list :max-projects="-1"></project-list>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>

import projectList from '../components/ProjectsList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    components: {
        contactSection,
        projectList
    }
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