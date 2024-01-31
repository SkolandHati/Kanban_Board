import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        colums: [
            {
                id: 1,
                name: 'ewgwegweg',
                task: [21324, 'gewgdsgfg']
            },
            {
                id: 2,
                name: 'ewgwe3242 3525325gweg',
                task: [2132421,'regergerh', 34344, 'ewrew3423r32']
            }
        ]
    }),
    getters: {
    },
    actions: {
        addTaskInStore(data) {
            console.log(data)
        },
    },
})