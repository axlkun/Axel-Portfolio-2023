<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
        <WorkSection></WorkSection>
    </v-sheet>
</template>

<script>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/ServicesSection.vue';
import workSection from '../components/WorkSection.vue';
import WorkSection from '../components/WorkSection.vue';

export default {

    components: {
    homeSection,
    aboutMeSection,
    servicesSection,
    WorkSection
}

}
</script>

<style scoped>

</style>