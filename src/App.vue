<template>
  <router-view />
</template>

<script>
  import { defineComponent, provide } from 'vue';
  import appdb from './store/appdb';

  export default defineComponent({
    name: 'App',

    setup() {
      provide('appdb', appdb)
    }
  })
</script>
