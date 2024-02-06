import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        colums: [
            {
                nameColums: "efwefe",
                tasks: [
                    {
                        id: 2,
                        text: 324324324
                    },
                    {
                        id: 3,
                        text: 'Привет!\n' +
                            'Мой опыт в Forntend-разработке - реализовывал клиентский функционал на JavaScript, верстал компоненты для готовых приложений на Vue 3, разрабатывал адаптивные веб-интерфейсы.\n' +
                            'После участвовал в разработке российского аналога Jira на Vue 3, разворачивать хранилище состояния с помощью Pinia для компонентов приложения, вёрстка компонентов бизнес кабинета, регистрация пользователя и т.д \n' +
                            'Есть свой проекты на GitHub в том числе и на Vue 3.'
                    }
                ]
            },
            {
                nameColums: "efererherheherhrehr",
                tasks: [
                    {
                        id: 1,
                        text: 'efwe3432432'
                    },
                    {
                        id: 2,
                        text: 324324324
                    },
                ]
            }
        ]
    }),
    actions: {

        addColumInStore(data) {
            this.colums.push(data)
        },
        deliteColum(data){
            let item= this.colums.findIndex(i => i.nameColums === data)
            this.colums.splice(item, 1)
        },

        addTaskInColum(id, data, nameColum){
            let item= this.colums.findIndex(i => i.nameColums === nameColum)
            this.colums[item].tasks.push({id: id, text: data})
        },
        deleteTaskInColums(idTask, nameColum){
            let item= this.colums.findIndex(i => i.nameColums === nameColum)
            let task =  this.colums[item].tasks.findIndex(i => i.id === idTask)
            this.colums[item].tasks.splice(task, 1)
        },

        // getTaskFromColum(nameColum, idTask){
        //     let item= this.colums.findIndex(i => i.nameColums === nameColum)
        //     let result =  this.colums[item].tasks.findIndex(i => i.id === idTask)
        //     console.log(this.colums[item].tasks[result])
        //     return this.colums[item].tasks[result]
        // }
    },
})