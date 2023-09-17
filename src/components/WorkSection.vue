<template>
    <v-sheet class="works">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
            <p>Cada proyecto es una oportunidad para adquirir nuevos conocimientos en una gran variedad de campos.</p>
        </v-sheet>

        <v-sheet class="work-container">
            <v-sheet class="work">
                <v-sheet class="img-container">
                    <img :src="imgUnfollowers" alt="Imagen Home" loading="lazy" />
                </v-sheet>
                <v-sheet class="work-title">
                    <h3>Unfollowers Tracker</h3>
                    <p>Herramienta web para descurbrir quien no te sigue en Instagram</p>
                </v-sheet>
            </v-sheet>
            <v-sheet class="work">
                <v-sheet class="img-container">
                    <img :src="imgCargaDatastageGral" alt="Imagen Home" loading="lazy" />
                </v-sheet>
                <v-sheet class="work-title">
                    <h3>Carga Datastage General</h3>
                    <p>Herramienta web para cargar el Datastage a BigQuery</p>
                </v-sheet>
            </v-sheet>
            <v-sheet class="work">
                <v-sheet class="img-container">
                    <img :src="imgUnfollowers" alt="Imagen Home" loading="lazy" />
                </v-sheet>
                <v-sheet class="work-title">
                    <h3>Unfollowers Tracker</h3>
                    <p>Herramienta web para descurbrir quien no te sigue en Instagram</p>
                </v-sheet>
            </v-sheet>
            <v-sheet class="work">
                <v-sheet class="img-container">
                    <img :src="imgUnfollowers" alt="Imagen Home" loading="lazy" />
                </v-sheet>
                <v-sheet class="work-title">
                    <h3>Unfollowers Tracker</h3>
                    <p>Herramienta web para descurbrir quien no te sigue en Instagram</p>
                </v-sheet>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgUnfollowers from '../assets/UnfollowersTracker.png';
import imgCargaDatastageGral from '../assets/CargaDatastageGeneral.png';

export default {

    name: 'workSection',

    data: () => ({
        imgUnfollowers,
        imgCargaDatastageGral
    }),

}
</script>

<style scoped>
.works {
    /*min-height: 100vh;*/
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

.work-container {
    margin: 30px auto;
    max-width: 90%;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;
    /* Establece una columna por defecto */

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        /* Cambia a dos columnas en pantallas más grandes */
        grid-row-gap: 4rem;
        grid-column-gap: 1rem;
    }
}

.work {
    background: transparent;
    /*background-color: #ffffffff;*/
    /*border: 1px solid rgb(131, 130, 158);*/
    border-radius: 8px;
}

.work-title {
    background: transparent;
    margin: 0 auto;
}

.img-container {

    background: transparent;
    margin: 0 auto;
    max-width: 85%;
}

.img-container img {

    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        min-width: 400px;
    }
}

.work h3 {
    font-size: 25px;
    max-width: 80%;
    margin: 0 auto;
    color: var(--primary-blue);
    text-align: start;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        font-size: 25px;
        
    }
}

.work p {
    font-size: 20px;
    font-weight: 400;
    max-width: 80%;
    margin: 0 auto;
    color: var(--primary-grey);
    text-align: start;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        text-align: start;
    }
}</style>