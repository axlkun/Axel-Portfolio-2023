<template>
    <v-sheet class="aboutme">
        <v-sheet class="description">

            <v-sheet class="container-aboutme">
                <h2>Sobre mi</h2>
            </v-sheet>

            <v-sheet class="container-aboutme-description">
                <p>
                    Estoy en el mundo de la programación por qué me fascina el proceso de materializar todas mis ideas
                    mediante código y mucha creatividad.
                </p>

                <p>
                    Me encargo de realizar proyectos con buenas prácticas para construir productos con un alto performance
                    acompañado de un excelente diseño de interfaz de usuario.
                </p>

                <p>
                    He desarrollado soluciones para empresas y dependencias de gobierno, que van desde sitios web
                    informativos hasta aplicaciones mas complejas que ayudan a agilizar procesos.
                </p>
            </v-sheet>

        </v-sheet>
        <v-sheet class="technologies">

            <v-sheet class="container-tecnologies">
                <h3>He trabajado con estas tecnologías recientemente</h3>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgAvatar from '../assets/avatar.png';

export default {

    name: 'aboutMeSection',

    data: () => ({
        imgAvatar
    }),

}
</script>

<style scoped>
.aboutme {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.description,
.technologies {
    flex-grow: 1;
    flex-basis: 50%;
}

.description {
    background-color: var(--primary-blue);
}

.technologies {
    background-color: var(--background-grey);
}


.container-aboutme {
    font-size: 35px;
    font-weight: 400;
    max-width: 80%;
    margin: 0 auto;
    background: transparent;
    color: var(--background-grey);
    text-align: center;

    @media only screen and (min-width: 768px) {
        font-size: 55px;
        font-weight: 400;
        text-align: start;
    }
}

.container-tecnologies {
    font-size: 25px;
    font-weight: 400;
    max-width: 80%;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-blue);
    text-align: center;
    line-height: 1.1;

    @media only screen and (min-width: 768px) {
        font-size: 35px;
        text-align: start;
        margin: 0 auto;
    }
}

.container-aboutme-description {
    background: transparent;
    color: var(--background-grey);
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    line-height: 1.2;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--background-grey);

    @media only screen and (min-width: 768px) {
        line-height: 1.5;
        font-size: 25px;
    }
}

</style>