<template>
<v-sheet class="contact" id="contact">
    <v-sheet class="contact-container">
        <v-sheet class="contact-description">
            
        </v-sheet>

        <v-sheet class="contact-links">
            
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
    width: 100%;
    height: 100%;
    position: relative; /* Añade posición relativa para que los porcentajes sean relativos a este contenedor */
}

.contact-container {
    width: 90%;
    height: 90%;
    background-color: var(--background-grey);
    position: absolute; /* Añade posición absoluta para que ocupe el espacio del elemento padre (.contact) */
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

.contact-links{
    background-color: var(--primary-blue);
}
</style>