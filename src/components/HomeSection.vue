<template>
    <v-sheet>
        <v-sheet class="home">
            
            <v-sheet class="home-container">
                <v-sheet class="hook-container">
                    <v-sheet class="home-encabezado">
                        
                        <v-sheet class="hook">
                            <p> Me gusta desarrollar productos de software sólidos y escalables con una excepcional experiencia de
                                usuario <img :src="imgHappyFace" alt="Imagen Home SVG" class="custom-sizing-img" loading="lazy" /></p>
                        </v-sheet>

                        <v-sheet class="home-description">
                            <p>Axel Cruz</p>
                            <p>Ingeniero en Sistemas ⋅ Programador</p>
                        </v-sheet>
                        
                    </v-sheet>
                    <v-sheet class="buttons-container">
                        <a class="button">Contacto</a>
                        <a class="button">Resume / CV</a>
                    </v-sheet>
                </v-sheet>
    
                <v-sheet class="img-container">
                    <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img" loading="lazy" />
                </v-sheet>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgHome from '../assets/img-home.png';
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
    background-color: var(--background-grey);
    min-height: 85vh;
}

.home-container{
    display: flex;
    flex-direction: column;
    max-width: 90%;
    /*background-color: var(--primary-white);*/
    background: transparent;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        max-width: 90%;
        justify-content: center;
        align-items: center;
    }
}

.hook-container{
    background: transparent;
}

.hook {
    color: var(--primary-blue);
    font-size: 35px;
    font-weight: 400;
    line-height: 1.2;
    background: transparent;

    @media only screen and (min-width: 600px) {
        font-size: 55px;
    }
}

.home-encabezado{
    background: transparent;
}

.home-encabezado img{
    margin-bottom: -10px;
}

.home-description{
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    margin: 15px auto;
    color: var(--primary-blue);

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: start;
        gap: 20px;
    }
}

.home-description p:nth-child(1){
    color: var(--primary-grey);

}

.buttons-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: transparent;
    margin-bottom: 20px;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: start;

    }
}

.button{
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 25px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
}

.buttons-container a:nth-child(2){
    background-color: var(--primary-purple);
    color: white;
}

.button:hover{
    opacity: 0.9;
}

.img-container,
.img-container img {
  background: transparent;
  max-width: 300px;
  margin: 0 auto;

  @media only screen and (min-width: 600px) {
    max-width: 700px;

}
}
</style>