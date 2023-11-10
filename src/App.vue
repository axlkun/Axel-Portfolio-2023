<template>
  <v-app id="app">

    <myHeader></myHeader>
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>
    <myFooter :blogEntry="blogEntry"></myFooter>
  </v-app>
</template>

<script>
import api from './api';

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
import './style.css?inline';

export default {

  components: {
    myHeader,
    myFooter
  },

  data: () => ({
    blogEntry: []
  }),

  methods: {
    getArticles() {
      // api.get('/api/articles?limit=6', { withCredentials: true })
      //   .then(response => {
      //     this.blogEntry = response.data.data;
      //   })
      //   .catch(error => {
      //     console.error('Error al hacer la solicitud GET:', error);
      //   });
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "__test=fe4b67cb0dbf319f4280e1c2ce166e74; expires=2024-12-13T23:22:50.381Z; path=/");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://portfoliocms.infinityfreeapp.com/api/projects", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  },

  mounted() {
    this.getArticles();
  }
}

</script>

<style scoped></style>
