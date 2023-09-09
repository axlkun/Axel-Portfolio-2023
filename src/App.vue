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
import colors from './style.css';

export default{
  components : {
    MyHeader,
    colors
  }
}

</script>

<style scoped>

</style>
