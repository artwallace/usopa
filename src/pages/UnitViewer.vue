<template>
    <div class="text-center">
        <h5 class="text-h5 text-center">{{ unit.name }}</h5>
        <img :src="unit.image" :alt="unit.name">
    </div>
</template>

<script>
    import { inject, computed } from 'vue';
    import { useRoute } from 'vue-router'

    export default {
        name: 'Units',
        setup() {
            const route = useRoute();

            const appdb = inject('appdb');
            const id = computed(() => parseInt(route.params.id))
            const unit = computed(() => appdb.appdb.units[id.value])

            return {
                unit
            }
        }
    }
</script>
