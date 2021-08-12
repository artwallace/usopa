<template>
    <div>
        <h1>Player Aids</h1>
        <div class="q-pa-md q-gutter-md">
            <q-btn color="teal" @click="this.$router.push('/aids/combat')">
                <q-icon left size="3em" name="casino" />
                <div>Combat Resolution Helper</div>
            </q-btn>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {
        }
    },
}
</script>