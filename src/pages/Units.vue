<template>
    <div>
        <h5 class="text-h5 text-center">Units</h5>
        <div class="q-pa-md row items-start q-gutter-md">
            <div
                v-for="(unit, idx) in units"
                :key="idx">
                <unit
                    :unit="unit"
                    :id="idx"
                    @click="this.$router.push(`/unit/${idx}`)" />
            </div>
        </div>
    </div>
</template>

<script>
    import { inject } from 'vue';
    import Unit from '../components/Unit.vue';

    export default {
        name: 'Units',
        setup() {
            const appdb = inject('appdb');
            const units = appdb.appdb.units;

            return {
                units
            }
        },
        components: {
            Unit
        }
    }
</script>