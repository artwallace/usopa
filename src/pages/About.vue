<template>
    <div>
        <h5 class="text-h5 text-center">{{ name }}</h5>
    </div>
</template>

<script>
export default {
    setup() {
        const name = 'About';
        
        return {
            name
        }
    },
    components: {
    }
}
</script>
