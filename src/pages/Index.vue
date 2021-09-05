<template>
    <!--
    <q-page class="flex flex-center">
        <img
            alt="Quasar logo"
            src="~assets/quasar-logo-vertical.svg"
            style="width: 200px; height: 200px"
            >
    </q-page>
    -->
    <div>
        <h5 class="text-h5 text-center">{{ name }}</h5>
    </div>
</template>

<script>
export default {
    setup() {
        const name = 'Main';
        
        return {
            name
        }
    },
    components: {
    }
}
</script>
