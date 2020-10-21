<template>
  <div>
    <p class="heading">Details</p>
    <b-container fluid="md">
      <b-table sticky-header hover :items="sailors"></b-table>
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
  .b-table-sticky-header{
    background: rgba(255,255,255,0.7);
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
</style>

