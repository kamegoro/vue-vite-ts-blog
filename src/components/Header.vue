<template>
  <div class="header">
    <a href="/">kame blog</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: `Header`,
}) 
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }
  a {
    max-width: 1100px;
    float: left;
    font-size: 24px;
    font-weight: 700;
    color: rgb(218, 218, 219);
    font-family: BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu,Cantarell, open sans, helvetica neue, sans-serif;
  }
</style>