<template>
  <section class="relative justify-center border-solid">
    <form class="gap-5 grid w-full relative">
        <div class="flex items-center justify-center px-5 py-4 pt-8 dark:border-gray-600">
          <h1>Колонка: {{taskName}}</h1>
          <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Show full screen
          </div>
        </div>
        <div class="px-4 py-2 bg-white border-solid border-2 border-indigo-600 rounded dark:bg-gray-700">
          <textarea :value="task.text" id="editor" rows="8" class="outline-none block w-full px-0 text-sm text-gray-800 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
        </div>
      <div class="gap-5 flex">
        <button @click.prevent="getTask(taskName, id)"
                type="submit"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Применить изменения
        </button>
        <button @click="goHome"
                type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer">
          <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 14 4 9 9 4" />  <path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>

    import {useRouter} from "vue-router";
    import {useStore} from "~/store/store.js"
    import { onMounted } from 'vue'
    import {ref} from "vue";

    const state = useStore()
    const router = useRouter()
    const { taskName, id } = useRoute().params

    const task = ref({})

    async function getTask(taskName, idTask){
      let indexColum = state.colums.findIndex(i => i.nameColums === taskName)
      let item = state.colums[indexColum].tasks.findIndex(i => i.id === Number(idTask))
      task.value = state.colums[indexColum].tasks[item]
    }

    onMounted(() => {
      getTask(taskName, id)
      console.log(task.value)
    })
    function goHome(){
      router.push(`/`)
    }

</script>

<style scoped>
  form{
    padding-left: 10%;
    padding-right: 10%;
  }
</style>