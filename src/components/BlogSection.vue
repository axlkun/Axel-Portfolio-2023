<template>
    <v-sheet class="blog">

        <v-sheet class="description">

            <v-sheet class="container-aboutme-title">
                <h2>Blog</h2>
            </v-sheet>

            <v-sheet class="container-aboutme-description">
                <p>Lee sobre programación, tecnología, startups y mucho más.</p>
            </v-sheet>

        </v-sheet>
        <v-sheet class="articles">
            <v-sheet v-for="article in blogEntry" class="article-entry">
                <v-sheet>
                    <v-sheet class="article-title">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.description }}</p>
                    </v-sheet>

                    <v-sheet class="tags">
                        <p v-for="tag in article.tags">{{ tag }}</p>
                    </v-sheet>
                </v-sheet>

                <v-sheet>
                    <p>Tiempo de lectura: 5min</p>
                </v-sheet>

            </v-sheet>

        </v-sheet>

    </v-sheet>
</template>

<script>
export default {

    name: 'blogSection',

    data: () => ({
        blogEntry: [
            {
                title: "VITRA",
                description: "INTERIOR ARCHITECT WORKPLACE",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "construyendo Unfollowers Tracker",
                description: "Como es construir una aplicacion web para monetizar",
                tags: ["Startup", "Adsense", "Web", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Aprender Vue",
                description: "INTERIOR ARCHITECT WORKPLACE",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Aprender Vue",
                description: "INTERIOR ARCHITECT WORKPLACE",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            },
            {
                title: "Aprender Vue",
                description: "INTERIOR ARCHITECT WORKPLACE",
                tags: ["Germany", "WellAmRhein", "Fulltime", "Other", "MidLevel"],
                lectureTime: 5
            }
        ]
    })

}
</script>

<style scoped>
.blog {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        min-height: 100vh;
    }
}

/*
.description,
.articles {
    flex-grow: 1;
    flex-basis: 50%;
}*/

.description {
    background-color: var(--primary-blue);
    padding: 15px 0 30px 0;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        padding: 0;
    }
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
        min-width: 80%;
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
    font-size: 20px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {

        width: 80%;
    }
}

.articles {
    background-color: var(--background-grey);
    padding: 15px 0;
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 0;
        border-top: 1px solid black;
    }
}

.article-entry {
    width: 90%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    padding-bottom: 15px;
    background: transparent;
    line-height: 1;

    @media only screen and (min-width: 768px) {
        width: 85%;
        flex-direction: row;
        justify-content: space-between;
    }
}

.article-entry * {
    background: inherit;
}

.article-title h3,
.article-title p {
    font-size: 25px;
    text-align: start;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

.article-title p {
    color: var(--primary-blue);
}

.tags {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    margin: 15px 0;
}

.tags p {
    border: 1px solid black;
    border-radius: 10px;
    padding: 1px 3px;
}
</style>