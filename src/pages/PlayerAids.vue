<template>
    <div class="text-center">
        <h5 class="text-h5 text-center">{{ name }}</h5>
        
        <div class="q-pa-md q-gutter-md">
            <q-btn color="teal" @click="this.$router.push({ name: 'CombatResolution' })">
                <q-icon left size="3em" name="casino" />
                <div>Combat Resolution Helper</div>
            </q-btn>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const name = 'Player Aids';
        
        return {
            name
        }
    },
    components: {
    }
}
</script>