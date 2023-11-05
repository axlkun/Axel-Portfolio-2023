<template>
    <v-sheet class="project">

        <v-sheet v-if="loading" class="skeleton">
            <!-- Contenedor principal -->
            <v-sheet color="#f5f1f1">
                <v-sheet color="#f5f1f1">
                    <v-row justify-center>
                        <!-- Contenedor 70% -->
                        <v-col cols="12" md="9" class="pt-12">
                            <v-skeleton-loader type="heading" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="subtitle" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="chip" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="image" color="#f5f1f1" class="pt-md-12 pb-md-12"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>  
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>  
                        </v-col>
                        <!-- Contenedor 30% -->
                        <v-col cols="12" md="3" class="pt-12">
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-sheet>

        </v-sheet>

        <v-sheet class="container" v-else>

            <v-sheet class="description-container">
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1> {{ article.title }}</h1>
                        </v-sheet>

                        <v-sheet class="description">
                            <p> {{ article.summary }} </p>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip v-for="category in article.categories" class="mr-2 mb-2" color="#0801ff">
                                {{ category.name }}
                            </v-chip>
                        </v-sheet>

                    </v-sheet>

                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Autor</h3>
                            <p class="link">AxelCruz</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Fecha</h3>
                            <p> {{ article.created_date}} </p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Tiempo de lectura</h3>
                            <p>5min</p>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="img-container">
                <v-lazy><img :src="`http://127.0.0.1:8000${article.imageUrl}`" alt="Imagen About Me"/></v-lazy>
            </v-sheet>

            <v-sheet class="article-content" v-html="article.description"></v-sheet>


        </v-sheet>

        <v-sheet class="title-container">
            <h2>Artículos relacionados</h2>
        </v-sheet>

        <articlesList :blogEntry="articles"></articlesList>

        <contactSection></contactSection>

    </v-sheet>
</template>

<script>
import api from '../api';

import articlesList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';

export default {

    name: 'articleDetail',

    props: ['slug'],

    components: {
        articlesList,
        contactSection
    },

    data: () => ({

        article: null,
        articles: null,
        loading: true
    }),

    watch: {
        slug: 'loadData' // Llama a la función loadData cuando la prop slug cambia
    },

    methods: {
        loadData() {
            this.article = [];
            this.articles = [];
            this.loading = true;

            api.get(`/api/articles/${this.slug}`)
                .then(response => {
                    this.article = response.data.data;
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                });

            api.get(`/api/related-articles/${this.slug}`)
                .then(response => {
                    this.articles = response.data.data;
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                });
        }
    },
    created() {
        this.loadData(); // Carga los datos al crear el componente
    }

}
</script>

<style scoped>
.project {
    background-color: var(--primary-background);
}

.skeleton {
    background-color: var(--primary-background);
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    @media only screen and (min-width: 1024px) {
        max-width: 90%;
    }
}

.container * {
    background: inherit;
}

.title {
    font-size: 35px;
    font-weight: bold;
    color: var(--primary-blue);
    text-align: start;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;

    }

}

.description {
    margin: 15px 0;
    color: var(--primary-blue);
}

.img-container {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 30px;
        width: 70%;
    }
}

.img-container img {
    width: 100%;
    height: 100%;
}

.description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    @media only screen and (min-width: 1024px) {
        margin: 30px 0;
    }

}

.project-data {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 20px;

    }
}

.project-description {
    flex: 70%;
}

.project-info {
    flex: 30%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 15px;

    @media only screen and (min-width: 1024px) {

        align-items: center;
    }
}

.link-container {
    width: 200px;
}

.project-info h3 {
    color: var(--primary-blue);
}

.link {
    text-decoration: underline;
}

.article-content {
    font-size: 16px;
    margin-bottom: 60px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
        width: 70%;
    }
}

.article-content h2 {
    color: var(--primary-blue);
    font-size: 25px;

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
}

.article-content p {
    margin-bottom: 15px;
}

.title-container {
    width: 90%;
    font-size: 25px;
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    text-align: start;
    border-top: 1px solid var(--primary-black);

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
}
</style>