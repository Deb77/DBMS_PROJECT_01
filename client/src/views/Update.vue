<template>
  <b-container >
    <p class="heading">Update Details</p>
    <b-form v-if="SID" class="form" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Sailor's ID"
        label-for="SID"
      >
        <b-form-input
          id="SID"
          v-model="form.SID"
          type="number"
          disabled
          min="0"
          max="9999"
        >
        </b-form-input>
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
          placeholder="Enter Sailor's Name"
          maxlength="30">
        </b-form-input>
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
          min="18"
          max="65"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div v-else>
      <b-alert class="text-center" show variant="danger">
        Please Select A Sailor You Want To Change/Update!!
      </b-alert>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      SID: this.$route.params.ID,
      form: {},
      ratings: [{text: 'Select One', value: null}, 
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();
      const data = {
        SNAME: this.form.SNAME, 
        RATING:this.form.RATING, 
        AGE:this.form.AGE,
      }
      axios.put(`http://localhost:5000/sailors/${this.SID}`,data)
      .then(res => alert(res.data))
    }
  },
  mounted(){
    axios.get(`http://localhost:5000/sailors/${this.SID}`)
    .then( res => this.form = res.data)
    .catch( err => console.log(err))
  }
}
</script>