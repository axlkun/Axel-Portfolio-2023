<template>
    <v-sheet>
        <v-sheet class="home">
            
            <v-sheet class="home-container">
                <v-sheet class="hook-container">
                    <v-sheet class="home-encabezado">
                        
                        <v-sheet class="hook">
                            <p> Me gusta desarrollar productos de software sólidos y escalables con una excepcional experiencia de
                                usuario <img :src="imgHappyFace" alt="Hayppy Face SVG" loading="lazy" /></p>
                        </v-sheet>

                        <v-sheet class="home-description">
                            <p>Axel Cruz</p>
                            <h1>Ingeniero en Sistemas ⋅ Programador</h1>
                        </v-sheet>
                        
                    </v-sheet>
                    <v-sheet class="buttons-container">
                        <a class="button">Contacto</a>
                        <a class="button">Resume / CV</a>
                    </v-sheet>
                </v-sheet>
    
                <v-sheet class="img-container">
                    <img :src="imgHome" alt="Imagen Home" loading="lazy" />
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
    min-height: 75vh;
}

.home-container{
    display: flex;
    flex-direction: column-reverse;
    max-width: 90%;
    /*background-color: var(--primary-white);*/
    background: transparent;
    margin: 0 auto;
    text-align: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: start;
    }
}

.hook-container, .img-container{
    flex-grow: 1;
    flex-basis: 50%;
    background: transparent;
}

.hook {
    color: var(--primary-blue);
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    background: transparent;

    @media only screen and (min-width: 768px) {
        font-size: 55px;
        line-height: 1.2;
        font-weight: 400;
    }
}

.home-encabezado{
    background: transparent;
    display: flex;
    flex-direction: column;
}

.hook img{
    margin-bottom: -10px;
}

.home-description{
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    margin: 15px 0;
    color: var(--primary-blue);

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: start;
        gap: 20px;
    }
}

.home-description p{
    color: var(--primary-grey);

}

.buttons-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: transparent;
    margin: 30px 0;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: start;
        gap: 20px;

    }
}

.button{
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;

    @media only screen and (min-width: 768px) {
        width: auto;

    }
}

.buttons-container a:nth-child(2){
    background-color: var(--background-grey);
    color: var(--font-black);
    border: 1px solid var(--font-black);
}

.button:hover{
    opacity: 0.9;
}


.img-container img {
 
  margin: 0 auto;
  width: 100%;
    display: block;
}
</style>