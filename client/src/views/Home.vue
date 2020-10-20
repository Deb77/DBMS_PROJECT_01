<template>
  <div>
    <p class="heading">Details</p>
    <b-container fluid="md">
      <b-table hover :items="sailors"></b-table>
    </b-container>
  </div>
 
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      sailors: [],
    }
  },
  mounted(){
    axios.get("http://localhost:5000/sailors")
    .then(res => this.sailors = res.data.rows)
  }
}
</script>

<style scoped>
  .heading{
    font-size: 2em;
    font-family: cursive;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
  }
  .table{
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
</style>

