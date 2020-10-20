<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: "App",
  components: { Navbar }
};
</script>

<style>
#app{
  background: url('./assets/sailors.jpg');
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  height:100vh;
}
</style>
