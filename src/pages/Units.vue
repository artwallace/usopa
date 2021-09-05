<template>
    <div>
        <h5 class="text-h5 text-center">{{ name }}</h5>
        <div class="q-pa-md row items-start q-gutter-md">
            <div
                v-for="(unit, idx) in units"
                :key="idx">
                <unit-card
                    :unit="unit"
                    :id="idx"
                    @click="this.$router.push({ name: 'UnitsViewer', params: { id: idx } })" />
            </div>
        </div>
    </div>
</template>

<script>
    import { inject } from 'vue';
    import UnitCard from '../components/UnitCard.vue';

    export default {
        setup() {
            const name = 'Units';
            const appdb = inject('appdb');
            const units = appdb.appdb.units;

            return {
                name,
                units
            }
        },
        components: {
            UnitCard
        }
    }
</script>