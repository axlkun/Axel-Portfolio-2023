<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
        <workSection></workSection>
        <blogSection :blogEntry="blogEntry"></blogSection>
        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/ServicesSection.vue';
import workSection from '../components/WorkSection.vue';
import blogSection from '../components/BlogSection.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    name: 'home',

    head() {
        return {
            title: 'Axel Cruz | Fullstack Developer'
        }
    },

    components: {
        homeSection,
        aboutMeSection,
        servicesSection,
        workSection,
        blogSection,
        contactSection
    },

    props: ['blogEntry'],

}
</script>

<style scoped></style>