<template>
    <div class="text-center">
        <h5 class="text-h5 text-center">{{ unit.name }}</h5>
        <img :src="unit.image" :alt="unit.name">
    </div>
    <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-btn fab icon="arrow_back" color="primary" @click="this.$router.push(`/units`)" />
    </q-page-sticky>
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
