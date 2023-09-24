<template>
    <v-sheet class="container">

        <v-sheet class="work-container">

            <v-card v-for="project in projectsList" :key="project.name" color="#0052faff" variant="text"
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
</template>

<script>

export default {

    props: ['projectsList']
}

</script>

<style scoped>
.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
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

.project-name {
    font-size: 16px;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.project-description {
    font-size: 16px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.project-type {
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