<template>
  <div>
    <p class="heading">Find Sailor</p>
    <b-form class="form" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Sailor's ID"
        label-for="SID"
      >
      <b-form-input
        id="SID"
        v-model="SID"
        type="number"
        required
        placeholder="Enter Sailor's ID"
      />
      </b-form-group>
      <b-button type="submit" variant="primary">Find</b-button>
    </b-form>
    <div v-if="length">
      <b-card
        tag="article"
      >
        <b-card-text class="text-center">
          <p>Sailor's ID: {{ data.SID }}</p>
          <p>Sailor's Name: {{ data.SNAME }}</p>
          <p>Sailor's Rating: {{ data.RATING }}</p>
          <p>Sailor's Age: {{ data.AGE }}</p>
          <b-button variant="warning" @click="onClick">Delete</b-button>
        </b-card-text>
      </b-card>    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'Update',
  data(){
    return{
      SID: "",
      data: {},
    }
  },
  methods:{
    onSubmit(e){
      e.preventDefault();
      axios.get(`http://localhost:5000/sailors/${this.SID}`)
      .then(res => {
        if(Object.keys(res.data).length > 0){
          this.data = res.data;
        }
        else{
          alert("Sailor does not exist");
        }
      })
      .catch(err => console.log(err));
    },
    onClick(){
      axios.delete(`http://localhost:5000/sailors/${this.SID}`)
      .then(res => {
        alert(res.data)
        this.SID = "";
        this.data = {};
      })
    }
  },
  computed: {
    length(){
      return Object.keys(this.data).length > 0;
    }
  }
}
</script>

<style scoped>
.card{
  margin: 2% auto;
  max-width: 25em;
}
</style>