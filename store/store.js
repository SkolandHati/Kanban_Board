import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        colums: [
        ]
    }),
    getters: {
    },
    actions: {
        addColumInStore(data) {
            this.colums.push(data)
        },
    },
})