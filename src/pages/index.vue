<script setup>
import day from 'dayjs'
import de from 'dayjs/locale/de'
import relativeTime from 'dayjs/plugin/relativeTime'
import collect from 'collect.js'

day.locale(de)
day.extend(relativeTime)

const { site } = usePage()
const ops = site.operations.current?.einsaetze ?? []
</script>

<template>
    <div class="p-3">
        <div v-if="ops.length">
            <h1
                class="text-2xl font-bold text-red-500 mb-3"
            >Im Einsatz</h1>

            <ul class="space-y-3">
                <li 
                    v-for="op in ops"
                    :key="op.einsatz.num1"
                >
                    <h2 class="text-lg font-bold">
                        {{ op.einsatz.einsatzsubtyp.text }}
                    </h2>
                    <p class="text-sm text-gray-500">
                        {{ op.einsatz.einsatztyp.text }}
                    </p>
                    <p>
                        {{ op.einsatz.einsatzort }}
                        {{ op.einsatz.adresse?.default }}
                    </p>
        
                    <p class="mt-1">
                        Alarmiert: {{ day(op.einsatz.startzeit).format('DD.MM.YYYY HH:mm') }}
                    </p>
                    <p>
                        Feuerwehren: {{ collect(op.einsatz.feuerwehren).map(f => f.feuerwehr).join(', ') }}
                    </p>
                </li>
            </ul>
        </div>
        <div v-else>
            <h1 class="text-green-500 text-lg font-bold">
                Einsatzbereit
            </h1>
        </div>
    </div>

    <hr class="mt-12">
    <pre>{{ ops }}</pre>
</template>