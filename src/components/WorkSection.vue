<template>
    <v-sheet class="works" id="projects">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
        </v-sheet>

        <project-list :max-projects="4"></project-list>

        <v-sheet class="button-container">
            <a href="/work" class="button">Ver mas proyectos <span class="mdi mdi-arrow-right-thin"></span></a>
        </v-sheet>
    </v-sheet>
</template>

<script>

import projectList from './ProjectsList.vue';

export default {

    name: 'workSection',

    components: {
        projectList
    }

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