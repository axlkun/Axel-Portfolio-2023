<template>
<v-sheet class="contact" id="contact">
    <v-sheet class="contact-container">
        <v-sheet class="contact-description">
            <v-sheet class="contact-description-container">
                <v-sheet class="container-description-title">
                    <h2>¿Tienes un proyecto en mente?</h2>
                    <p>¡Envíame un mensaje!</p>
                </v-sheet>
                <v-sheet class="container-description-description">
                    <p>Puedo ayudarte con el desarrollo frontend y fullstack, así como con la actualización y optimización de tus proyectos en línea. </p>
    
                    <p>Estoy listo para ayudarte a llevar tus ideas a la realidad.</p>
                </v-sheet>
    
                <v-sheet class="tags">
                    <p>Sitios web</p>
                    <p>Landig Page</p>
                    <p>Portafolio</p>
                    <p>Blog</p>
                    <p>Aplicación web</p>
                    <p>Software a la medida</p>
                </v-sheet>
            </v-sheet>
            
        </v-sheet>

        <v-sheet class="contact-links">
            <v-sheet class="contact-link-container">
                <v-sheet class="follow">
                
                    <h3 class="button">Linkdln <span class="mdi mdi-arrow-right-thin"></span></h3>
                    <h3 class="button">GitHub <span class="mdi mdi-arrow-right-thin"></span></h3>
                    <h3 class="button">Twitter <span class="mdi mdi-arrow-right-thin"></span></h3>
                    <h3 class="button">Instagram <span class="mdi mdi-arrow-right-thin"></span></h3>
                
            </v-sheet>

            <v-sheet class="direct-contact">
                <h3 class="button">Email <span class="mdi mdi-arrow-right-thin"></span></h3>
            </v-sheet>
            </v-sheet>
            
        </v-sheet>

    </v-sheet>
</v-sheet>
</template>

<script>
export default{
    name: 'contactSection'
}
</script>

<style scoped>
.contact {
    min-height: 100vh;
    background-color: var(--primary-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contact-container {
    background-color: var(--primary-blue);
    min-width: 90%;
    min-height: 90%;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.contact-description,
.contact-links{
    flex-grow: 1;
    flex-basis: 50%;
}

.contact-description{
    background-color: #232325;
}

.contact-description-container{
    width: 90%;
    margin: 15px auto;
    background: transparent;

    @media only screen and (min-width: 1024px) {

        width: 85%;
    }
}

.container-description-title,
.container-description-description {
    background: transparent;
    color: var(--background-grey);
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    line-height: 1.2;
    margin-top: 30px;

    @media only screen and (min-width: 1024px) {

        font-size: 20px;
    }
}

.container-description-title p{

    font-size: 35px;
    line-height: 1;

    @media only screen and (min-width: 1024px) {

        font-size: 55px;
    }

}

.tags {
    background: transparent;
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    margin: 30px 0;
}

.tags p {
    color: var(--background-grey);
    border: 1px solid var(--background-grey);
    border-radius: 10px;
    padding: 1px 5px;
}

.contact-links{
    background-color: var(--primary-blue);
    
}

.contact-link-container{
    width: 90%;
    margin: 15px auto;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media only screen and (min-width: 1024px) {

        width: 85%;
        gap: 50px;
    }
}

.follow{
    background: transparent;
    border-top: 1px solid var(--background-grey);
}

.direct-contact{
    background: transparent;
    border-top: 1px solid var(--background-grey);
    

}

.contact-link-container h3{
    font-size: 25px;
    text-align: center;
    color: var(--background-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
    

    @media only screen and (min-width: 1024px) {
       
        font-size: 55px;
        cursor: pointer;
    }

    &:hover{
        transform: scale(1.01);
        filter: brightness(0.9);
    }
}

</style>