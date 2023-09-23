<template>
    <v-sheet class="blog" id="blog">

        <v-sheet class="description">

            <v-sheet class="container-aboutme-title">
                <h2>Blog</h2>
            </v-sheet>

            <v-sheet class="container-aboutme-description">
                <p>Explora una amplia variedad de temas informativos en este espacio donde encontrarás una diversidad de
                    tópicos que te mantendrán actualizado en temas de programación, tecnología, startups y más.</p>
                <p>Estos son los artículos mas recientes <span class="mdi mdi-arrow-down-right"></span></p>
            </v-sheet>

        </v-sheet>
        <v-sheet class="articles">
            <v-sheet v-for="article in blogEntry" class="article-entry">
                <v-sheet class="img-container">
                    <v-img class="img" :src="imgBlog"></v-img>
                    <p>17/01/2023</p>
                </v-sheet>
                
                <v-sheet>
                    <v-sheet class="article-title">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.description }}</p>
                    </v-sheet>

                    <v-sheet class="tags">
                        <p v-for="tag in article.tags">{{ tag }}</p>
                    </v-sheet>
                </v-sheet>

            </v-sheet>

        </v-sheet>

        <v-sheet class="button-container">
            <a class="button">Visitar el blog <span class="mdi mdi-arrow-right-thin"></span></a>
        </v-sheet>

    </v-sheet>
</template>

<script>
import imgBlog from '../assets/logo-axel.svg';

export default {

    name: 'blogSection',

    props: ['blogEntry'],

    data: () => ({
        imgBlog
    })

}
</script>

<style scoped>
.blog {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        min-height: 100vh;
    }
}

.description {
    background-color: var(--primary-black);
    padding: 15px 0 30px 0;
    display: flex;
    flex-direction: column;

}

.container-aboutme-title {
    font-size: 35px;
    font-weight: 400;
    min-width: 90%;
    margin: 0 auto;
    background: transparent;
    color: var(--background-grey);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        font-weight: 400;
        text-align: start;
    }
}

.container-aboutme-description {
    background: transparent;
    color: var(--background-grey);
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {

        font-size: 20px;
    }
}

.articles {
    /*background-color: var(--background-grey);*/
    padding: 30px 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;
    /* Establece una columna por defecto */

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        /* Cambia a dos columnas en pantallas más grandes */
        grid-row-gap: 2rem;
        grid-column-gap: 4rem;
    }
}

.article-entry {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--primary-black);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: transparent;
    line-height: 1.2;
    transition: transform 0.3s, filter 0.3s;

    &:hover {
        transform: scale(1.01);
        cursor: pointer;
    }
}

.article-entry * {
    background: inherit;
}

.img-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

  .img{
    max-width: 50px;
  }

.article-title h3 {
    font-size: 16px;
    text-align: start;
    margin-bottom: 15px;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.article-entry p {
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.article-title p {
    color: var(--primary-blue);
    color: grey;
}

.img-container p {
    font-size: 14px;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.tags {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    margin: 15px 0;
}

.tags p {
    border: 1px solid var(--primary-black);
    border-radius: 10px;
    padding: 1px 5px;
}

.button-container {
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background: transparent;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: flex-end;
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

    &:hover {
        opacity: 0.9;
    }

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}
</style>