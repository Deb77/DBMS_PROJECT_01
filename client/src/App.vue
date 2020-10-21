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
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url('./assets/sailors.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.heading{
  font-size: 2em;
  font-family: cursive;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
}
</style>
