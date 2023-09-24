<template>
    <v-sheet class="project">

        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Unfollowers Tracker</h1>
            </v-sheet>
        </v-sheet>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import contactSection from '../components/ContactSection.vue';

export default {

components: {
    contactSection
}

}
</script>

<style scoped>
.project{
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