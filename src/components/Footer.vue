<template>
  <v-footer 
    padless
  >
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>
        <a href="https://github.com/kamegoro" target="_blank">kamegoro</a>
      </strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: `Footer`,
}) 
</script>

<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1100;
    width: 100%;
    padding: 0.6rem;
    text-align: center;
    background: rgb(29, 30, 32);
    color: white;
  }
</style>