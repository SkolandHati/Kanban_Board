<template>
  <main id="main" class="bg-white py-10 relative">
    <header class="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Kanban</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 text-center">Распиши свою жизни на задачи</p>
      <button-task :name="'Новая колонка'" @click="showModal"></button-task>
    </header>
    <hr>
    <div class="grid grid-cols-4 gap-4 p-7" v-if="colums.$state.colums">
      <Card v-for="(item, i) in colums.$state.colums"
            :key="i"
            :itemColum="item" ></Card>
    </div>
  </main>
  <ModalWindow class="w-full h-full"
               v-show="show"
               @close-window="showModal"></ModalWindow>
</template>

<script setup>

  import ButtonTask from "~/components/buttons/ButtonTask.vue";
  import ModalWindow from "~/components/ModalComponent/ModalWindow.vue";
  import Card from "~/components/Card/Card.vue"
  import {useStore} from "~/store/store.js"
  import {ref} from "vue";

  const name = ref('Home')

  const colums = useStore()

  let show = ref(false)
  const showModal = function () {
      show.value = !show.value
    }

</script>

<style scoped>

</style>