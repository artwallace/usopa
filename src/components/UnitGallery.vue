<template>
    <div
        v-for="unit in units"
        :key="unit.id"
        id="unit-gallery"
        >
        <unit :unit="unit" />
    </div>
</template>

<script>
    import Unit from '../components/Unit.vue'
    export default {
        props: ['units'],
        components: {
            Unit
        }
    }
</script>