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
            <router-link class="links" to="/">
            <HomeIcon/>
            Home
            </router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="links" to="/add">
            <AddIcon/>
            Add
            </router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="links" to="/search">
            <SearchIcon/>
            Search
            </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue';
import AddIcon from 'vue-material-design-icons/Plus.vue';
import SearchIcon from 'vue-material-design-icons/FindReplace.vue';

export default {
    name: "Navbar",
    components: { HomeIcon, AddIcon, SearchIcon }
}
</script>

<style scoped>
    .navbar{
        margin-bottom: 5em;
    }
    .links{
        text-decoration: none;
        color:#fff;
        display: flex;
        align-items: center;
    }
</style>