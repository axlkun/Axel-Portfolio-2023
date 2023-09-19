<template>
<v-sheet class="blog">

    <v-sheet class="title-container">
        <h2>Blog</h2>
    </v-sheet>

    <v-sheet class="container-blog">

    </v-sheet>

</v-sheet>
</template>

<script>
export default {

name: 'blogSection'

}
</script>

<style scoped>
.blog{
    background-color: var(--primary-blue);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-container {
    font-size: 35px;
    width: 80%;
    margin: 0 auto;
    color: var(--background-grey);
    background: transparent;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        width: 90%;
        text-align: start;
    }
}

.title-container h2 {
    font-weight: 400;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
    }
}

.container-blog{
    min-height: 80vh;
    width: 90%;
    background-color: var(--background-grey);

    @media only screen and (min-width: 1024px) {
        width: 60%;
    }
}
</style>