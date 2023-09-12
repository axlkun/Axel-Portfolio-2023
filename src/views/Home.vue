<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
    </v-sheet>
</template>

<script>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/Services.vue';

export default {

    components: {
        homeSection,
        aboutMeSection,
        servicesSection
    }

}
</script>

<style scoped>

</style>