<template>
  <b-container>
    <p class="heading">Add Details</p>
    <b-form class="form" @submit="onSubmit">
      <b-form-group
        id="input-group-sid"
        label="Sailor's ID"
        label-for="SID"
      >
        <b-form-input
          id="SID"
          v-model="form.SID" 
          type="number"
          required
          placeholder="Enter Sailor's ID"
          min="0"
          max="9999"  
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-sname"
        label="Sailor's Name"
        label-for="Sname"
      >
        <b-form-input
          id="Sname"
          v-model="form.SNAME"
          maxlength="30"
          required
          placeholder="Enter Sailor's Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-rating" label="Rating:" label-for="Rating">
        <b-form-select
          id="Rating"
          v-model="form.RATING"
          :options="ratings"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-age" label="Age:" label-for="Age">
        <b-form-input
          id="Age"
          v-model="form.AGE"
          placeholder="Enter Sailor's Age"
          type="number"
          min="18"
          max="65"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name:"Add",
  data(){
    return {
      form: {
        SID:"",
        SNAME: "",
        RATING: "",
        AGE: "",
      },
      ratings: [ 
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();
      axios.post("http://localhost:5000/sailors/",{
        SID: this.form.SID,
        SNAME: this.form.SNAME, 
        RATING:this.form.RATING, 
        AGE:this.form.AGE, 
      })
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
