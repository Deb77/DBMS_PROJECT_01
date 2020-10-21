<template>
  <b-container>
    <p class="heading">Add Details</p>
    <b-form class="form" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Sailor's ID"
        label-for="SID"
      >
        <b-form-input
          id="SID"
          v-model="form.SID"
          type="number"
          required
          placeholder="Enter Sailor's ID"/>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Sailor's Name"
        label-for="Sname"
      >
        <b-form-input
          id="Sname"
          v-model="form.SNAME"
          type="text"
          required
          placeholder="Enter Sailor's Name"/>
      </b-form-group>
      <b-form-group id="input-group-2" label="Rating:" label-for="Rating">
        <b-form-select
          id="Rating"
          v-model="form.RATING"
          :options="ratings"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-3" label="Age:" label-for="Age">
        <b-form-input
          id="Age"
          v-model="form.AGE"
          type="number"
          required
          placeholder="Enter Sailor's Age"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
  name:'Add',
  data(){
    return {
      form: {
        SID:'',
        SNAME: '',
        RATING: '',
        AGE: '',
      },
      ratings: [{text: 'Select One', value: null}, 
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();
      const data = { 
        SID: this.form.SID, 
        SNAME: this.form.SNAME, 
        RATING:this.form.RATING, 
        AGE:this.form.AGE, 
      }
      axios.post("http://localhost:5000/sailors/",data)
       .then( (res) => {
         alert(res.data)
          this.form.SID = "";
          this.form.SNAME = "";
          this.form.RATING = "";
          this.form.AGE = "";
       })
       .catch( err => alert(err));
      
    }
  }
}
</script>

<style scoped>
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
