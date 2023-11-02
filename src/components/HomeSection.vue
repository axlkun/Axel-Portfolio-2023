<template>
    <v-sheet>
        <v-sheet class="home" id="home">

            <v-sheet class="home-container">
                <v-sheet class="hook-container">
                    <v-sheet class="home-encabezado">

                        <v-sheet class="hook">
                            <p> Me gusta desarrollar productos de software <span>sólidos</span> y <span>escalables</span> con una excepcional <span>experiencia de usuario</span> <img :src="imgHappyFace" alt="Hayppy Face SVG" v-lazy/></p>
                        </v-sheet>

                        <v-sheet class="home-description">
                            <p>Axel Cruz</p>
                            <h1>Ingeniero en Sistemas Computacionales ⋅ Programador</h1>
                        </v-sheet>

                    </v-sheet>
                    <v-sheet class="buttons-container">
                        <a class="button">Contacto</a>
                        <a class="button">Resume / CV</a>
                    </v-sheet>
                </v-sheet>

                <v-sheet class="img-container">
                    <img :src="imgHome" alt="Imagen Home" v-lazy/>
                </v-sheet>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgHome from '../assets/img-home2.svg';
import imgHappyFace from '../assets/happyface.svg';

export default {

    name: 'homeSection',

    data: () => ({
        imgHome,
        imgHappyFace
    }),

}
</script>

<style scoped>
.home {
    display: flex;
    background-color: var(--primary-background);
    min-height: 80vh;
}

.home-container {
    display: flex;
    flex-direction: column-reverse;
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: start;
    }
}

.home-encabezado {
    background: transparent;
    display: flex;
    flex-direction: column;
}

.hook-container,
.img-container {
    flex-grow: 1;
    flex-basis: 50%;
    background: transparent;
}

.hook {
    color: var(--primary-black);
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    background: transparent;
    max-width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        line-height: 1;
        font-weight: 400;
        max-width: none;
    }
}

.hook img {
    margin-bottom: -10px;
}

.hook span{
    color: var(--primary-blue);
}

.home-description {
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 16px;
    line-height: 1.5;
    margin: 15px 0;
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: start;
        font-size: 20px;
        gap: 20px;
    }
}

.home-description p {
    color: var(--primary-black);

}

.buttons-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: transparent;
    margin: 30px 0;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: start;
        gap: 20px;

    }
}

.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;

    @media only screen and (min-width: 1024px) {
        width: auto;

    }
}

.buttons-container a:nth-child(2) {
    background-color: var(--primary-background);
    color: var(--primary-black);
    border: 1px solid var(--primary-black);
}

.button:hover {
    opacity: 0.9;
}


.img-container img {
    margin: -15px auto;
    max-width: 80%;
    display: block;

    @media only screen and (min-width: 1024px) {
        margin: -70px auto;

    }
}
</style>