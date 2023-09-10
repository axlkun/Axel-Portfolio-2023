<template>
    <v-sheet class="aboutme">
        <v-sheet class="description">

            <v-sheet class="container-sobremi">
                <h2>Sobre mi</h2>
            </v-sheet>

        </v-sheet>
        <v-sheet class="technologies">


        </v-sheet>
    </v-sheet>
</template>

<script>

export default {

    name: 'aboutMeSection',

}
</script>

<style scoped>
.aboutme {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.description,
.technologies {
    flex-grow: 1;
    flex-basis: 50%;
}

.description {
    background-color: var(--primary-blue);
}

.technologies {
    background-color: var(--background-grey);
}

.container-sobremi {
    max-width: 80%;
    margin: 0 auto;
    background: transparent;
    color: var(--background-grey);
}

.container-sobremi{
    font-size: 35px;
    font-weight: 400;

    @media only screen and (min-width: 768px) {
        font-size: 55px;
        font-weight: 400;
    }
}
</style>