<template>
    <v-sheet>
        <v-sheet class="home">
            <v-sheet style="background: transparent;">
                <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img" loading="lazy" />
            </v-sheet>
            <v-sheet class="home-encabezado">
                <p>Axel Cruz</p>
                <p>Ingeniero en Sistemas ⋅ Programador</p>
                <p> Me gusta desarrollar productos de software sólidos y escalables con una excepcional experiencia de
                    usuario <img :src="imgHappyFace" alt="Imagen Home SVG" class="custom-sizing-img" loading="lazy" /></p>
            </v-sheet>
            <v-sheet class="buttons-container">
                <a class="button">Contacto</a>
                <a class="button">Resume / CV</a>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgHome from '../assets/img-home.png';
import imgHappyFace from '../assets/happyface.svg';

export default {


    data: () => ({
        imgHome,
        imgHappyFace
    }),

}
</script>

<style scoped>
.home {
    background-color: var(--primary-white);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media only screen and (min-width: 600px) {
        flex-direction: column;
    }
}

.home img{
    max-width: 250px;

}

.home-encabezado {
    /* adapta la sección de contacto*/
    /* vista movil */
    background: transparent;
    max-width: 90%;
    margin: 0 auto;
    font-size: 16px;
    margin-bottom: 10px;
    

    @media only screen and (min-width: 600px) {
        font-size: 20px;
        max-width: 60%;
        padding: 20px 0;
    }
}

.home-encabezado p:nth-child(1) {
    /*color: #0434e4;*/
    color: var(--primary-blue);
    /* Color para el primer párrafo */
}

.home-encabezado p:nth-child(2) {
    color: var(--primary-grey);
    /* Color para el segundo párrafo */
}

.home-encabezado p:nth-child(3) {
    /*color: #0434e4;*/
    color: var(--primary-blue);
    font-size: 35px;
    font-weight: 400;
    line-height: 1.2;

    @media only screen and (min-width: 600px) {
        font-size: 55px;
    }
}

.home-encabezado img{
    margin-bottom: -10px;
}

.buttons-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: transparent;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
}

.button{
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}

.buttons-container a:nth-child(2){
    background-color: var(--primary-purple);
    color: white;
}

.button:hover{
    opacity: 0.9;
}
</style>