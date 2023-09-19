<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
        <workSection></workSection>
        <blogSection></blogSection>
    </v-sheet>
</template>

<script>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/ServicesSection.vue';
import workSection from '../components/WorkSection.vue';
import blogSection from '../components/BlogSection.vue';

export default {

    components: {
    homeSection,
    aboutMeSection,
    servicesSection,
    workSection,
    blogSection
}

}
</script>

<style scoped>

</style>