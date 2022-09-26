<template>
  <v-app-bar 
    app
    absolute
    color="rgb(29, 30, 32)"
  >
    <v-toolbar-title>
      <a href="/">kame blog</a>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: `Header`,
}) 
</script>

<style scoped>
  header {
    width: 100%;
    text-align: center;
  }
  a {
    max-width: 1100px;
    float: left;
    font-size: 24px;
    font-weight: 700;
    color: rgb(218, 218, 219);
    text-decoration: none;
    font-family: BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu,Cantarell, open sans, helvetica neue, sans-serif;
  }
</style>