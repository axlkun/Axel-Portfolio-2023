<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
    </v-sheet>
</template>

<script>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';

export default {

    components: {
        homeSection,
        aboutMeSection
    }

}
</script>

<style scoped>

</style>