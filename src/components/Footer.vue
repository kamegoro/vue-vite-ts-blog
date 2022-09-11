<template>
  <footer>
    <a href="https://github.com/kamegoro" target="_blank">kamegoro</a>
  </footer>
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
  }
  a {
    font-size: 14px;
    font-weight: 700;
    color: rgb(218, 218, 219);
    font-family: BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu,Cantarell, open sans, helvetica neue, sans-serif;
  }
</style>