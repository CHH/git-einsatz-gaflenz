import currentOperations from '@/../data/json_laufend.json'
import dayOperations from '@/../data/json_taeglich.json'

export default {
    title: 'FF Gaflenz Einsätze',
    operations: {
        current: currentOperations,
        daily: dayOperations,
    }
}