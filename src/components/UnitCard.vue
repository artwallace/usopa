<template>
  <q-card class="unit-card bg-blue-grey-9 cursor-pointer q-hoverable" v-ripple>
    <span class="q-focus-helper" />
    <img :src="unit.image" :alt="unit.name">

    <q-card-section>
      <div class="text-h6">{{ unit.name }}</div>
      <div class="text-subtitle2">{{ unit.faction }}</div>
    </q-card-section>

    <q-card-section v-if="unit.desc" class="q-pt-none">
      {{ unit.desc }}
    </q-card-section>
  </q-card>
</template>

<script>
    export default {
      setup() {
      },
      props: ['unit', 'id']
    }
</script>

<style lang="sass" scoped>
.unit-card
  width: 100%
  max-width: 250px
</style>