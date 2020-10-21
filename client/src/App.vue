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
.form{
  max-width: 500px;
  margin:0 auto;
  background: rgba(255,255,255,0.7);
  border-radius: 5px;
  box-shadow: 0 0 5px;
  padding: 10px;
  }
.btn-danger{
  margin-left: 10px;
}
</style>
