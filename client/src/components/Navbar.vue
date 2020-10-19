<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand>
        <router-link class="links" to="/">Sailor's Directory</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
            <HomeIcon/>
            <router-link class="links" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
            <AddIcon/>
            <router-link class="links" to="/add">Add</router-link>
        </b-nav-item>
        <b-nav-item>
            <UpdateIcon/>
            <router-link class="links" to="/update">Update</router-link>
        </b-nav-item>
        <b-nav-item>
            <DeleteIcon/>
            <router-link class="links" to="/delete">Delete</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue';
import AddIcon from 'vue-material-design-icons/Plus.vue';
import UpdateIcon from 'vue-material-design-icons/Update.vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';

export default {
    name: "Navbar",
    components: { HomeIcon, AddIcon, UpdateIcon, DeleteIcon }
}
</script>

<style scoped>
    .links{
        text-decoration: none;
        color:#fff;
    }
    .nav-link{
        display: flex;
        align-items: center;
    }
</style>