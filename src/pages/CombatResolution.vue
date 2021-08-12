<template>
    <div class="text-center">
        <h5 class="text-h5 text-center">Combat Resolution Helper</h5>
    </div>
    <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-btn fab icon="arrow_back" color="primary" @click="this.$router.push(`/aids`)" />
    </q-page-sticky>
</template>

<script>
export default {
    setup() {
    },
}
</script>