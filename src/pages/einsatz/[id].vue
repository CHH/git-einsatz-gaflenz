<script>
import ops from '@/../data/json_taeglich.json'

export default definePageComponent({
    async getStaticPaths() {
        return ops.einsaetze.map(({ einsatz }) => {
            return {
                params: {
                    id: einsatz.num1,
                },
                props: { einsatz }
            }
        })
    }
})
</script>

<script setup>
defineProps(['einsatz'])
</script>

<template>
    <div>
        <h1>{{ einsatz.einsatzsubtyp.text }}</h1>

        <pre>{{ einsatz }}</pre>
    </div>
</template>