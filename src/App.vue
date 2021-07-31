<template>
  <div id="nav" class="container mt-5">
    <router-link to="/">Home</router-link> |
    <router-link to="/aids">Player Aids</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
  export default {
    name: 'app',

    data: function() {
      return {
        title: "test",
        max: 20,
        testing: true
      };
    },

    computed: {
      testSum: function() {
        let sum = 0;
        return sum;
      }
    },

    methods: {
      toggleTest: function() {
        this.testing = !this.testing;
      }
    },

    /* mounted: function() {
      fetch("https://example.com/data")
        .then(response => response.json())
        .then(data => {
          this.data = data;
      });
    } */
    created () {
      //document.title = "Unofficial Player Aids for Spectre Operations";
    }
  }
</script>


<style>
  #app {
  }

  #nav {
  }

  #nav a {
  }

  #nav a.router-link-exact-active {
  }
</style>
