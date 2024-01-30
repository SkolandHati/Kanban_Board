import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ([]),
    getters: {
        addColums: (state, data) => {
            console.log(this.state, data)
        },
    },
    actions: {
        pushTaskInStore(data) {
            this.addColums(data)
        },
    },
})