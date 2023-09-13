<template>
  <v-app id="app">

    <MyHeader></MyHeader>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import MyHeader from './components/Header.vue';
import './style.css?inline';

export default{
  components : {
    MyHeader,
  }
}

</script>

<style scoped>

</style>
