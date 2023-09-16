<template>
    <v-sheet class="work">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
            <p>Cada proyecto es una oportunidad para adquirir nuevos conocimientos en una gran variedad de campos.</p>
        </v-sheet>
    </v-sheet>
</template>

<script>
export default {

name: 'workSection',


}
</script>

<style scoped>
.work{
    min-height: 100vh;
    background-color: var(--background-grey);
}

.title-container {
    font-size: 35px;
    max-width: 80%;
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        max-width: 90%;
        text-align: start;
    }
}

.title-container h2 {
    font-weight: 400;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
    }
}

.title-container p {
    font-size: 20px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        line-height: 1.1;
        font-size: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--primary-blue);
    }
}
</style>