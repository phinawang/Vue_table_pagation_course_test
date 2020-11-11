<script>
import CatTable from "./components/CatTable";
export default {
  name: "App",
  components: {
    CatTable,
  },
};
</script>

<template>
  <div id="app">
    <CatTable />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
