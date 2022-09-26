<template>
  <v-app>
    <Header />
    <v-main
      :class='"main"'
    >
      <v-container 
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Footer
  },

  data () {
    return {
      //
    }
  },
})
</script>

<style scoped>
  .main {
    background: rgb(29, 30, 32);
    color: white;
    width: 100%;
  }
</style>