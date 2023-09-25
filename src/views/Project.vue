<template>
    <v-sheet class="project">

        <v-sheet class="container">

            <v-sheet class="description-container">
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1>Unfollowers Tracker</h1>
                        </v-sheet>
    
                        <v-sheet class="d-flex flex-wrap justify-start custom-chips">
                            <v-chip class="mr-2 mb-2" color="blue">
                                Vue
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="blue">
                                Vuetify
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="blue">
                                Laravel
                            </v-chip>
                            <v-chip class="mr-2 mb-2" color="blue">
                                MySQL
                            </v-chip>
                        </v-sheet>
    
                        <v-sheet class="description">
                            <p>Oyster launched a brand awareness campaign and microsite at the beginning of Q3 2023. The site
                                features an interactive quiz asking visitors "What's your workstyle?", and also includes
                                profiles of Oyster employees highlighting who they are outside of work. I designed and art
                                directed the sub-brand identity of the campaign including the wordmark, color palette, and
                                general visual language. I also designed the microsite in its entirety, as well produced all the
                                various campaign assets for paid media, organic social, and lifecycle assets.</p>
                                <p>Oyster launched a brand awareness campaign and microsite at the beginning of Q3 2023. The site
                                    features an interactive quiz asking visitors "What's your workstyle?", and also includes
                                    profiles of Oyster employees highlighting who they are outside of work. I designed and art
                                    directed the sub-brand identity of the campaign including the wordmark, color palette, and
                                    general visual language. I also designed the microsite in its entirety, as well produced all the
                                    various campaign assets for paid media, organic social, and lifecycle assets.</p>
                        </v-sheet>
                    </v-sheet>
    
                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Company</h3>
                            <p>Proyecto propio</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Rol</h3>
                            <p>Fullstack Developer</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Ver código</h3>
                            <p>codigo.com</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Visitar el sitio</h3>
                            <p>unfollowerstracker.com</p>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>
            <v-sheet class="img-container">
                <img :src="imgUnfollowersTracker" alt="Imagen About Me" loading="lazy" />
            </v-sheet>

        </v-sheet>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script>
import contactSection from '../components/ContactSection.vue';

import imgUnfollowersTracker from '../assets/UnfollowersTracker.png'

export default {

    components: {
        contactSection
    },

    data: () => ({
        imgUnfollowersTracker
    }),

}
</script>

<style scoped>
.project {
    background-color: var(--primary-background);
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
}

.container * {
    background: inherit;
}

.title {
    font-size: 35px;
    font-weight: 400;
    margin: 0 auto;
    color: var(--primary-blue);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        font-weight: 400;
        text-align: start;
    }

}

.img-container {

    margin: 0 auto;
}

.img-container img {

    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        min-width: 400px;
    }
}

.description-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
}

.project-data{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 30px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 20px;
        
    }
}

.project-description{
    flex: 70%;
}

.project-info{
    flex: 30%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 15px;

    @media only screen and (min-width: 1024px) {
    
       align-items: center;
    }
}

.link-container{
    width: 200px;
}

.project-info h3{
    color: var(--primary-blue);
}

</style>