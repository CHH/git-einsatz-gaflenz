<script setup>
const { site } = usePage()
</script>

<template>
    <div>
        Einsätze:
        
        <ul>
            <li
                v-for="op in site.operations.daily.einsaetze"
            >
                <a :href="`/einsatz/${op.einsatz.num1}`">
                    {{ op.einsatz.num1 }}
                    {{ op.einsatz.einsatzsubtyp.text }}
                </a>
            </li>
        </ul>
    </div>
</template>