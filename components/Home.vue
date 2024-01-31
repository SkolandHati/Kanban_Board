<template>
  <main id="main" class="bg-white py-10 relative">
    <header class="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Kanban</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 text-center">Распиши свою жизни на задачи</p>
      <button-task :name="'Новая колонка'" @click="showModal"></button-task>
    </header>
    <ModalWindow v-show="show"></ModalWindow>
    <hr>
    <div class="grid grid-cols-4 gap-4 p-7" v-if="addTask">
      <Card v-for="item in addTask.$state.colums"
            :key="item.id"
            :itemTask="item" ></Card>
    </div>
  </main>
</template>

<script setup>

  import ButtonTask from "~/components/buttons/ButtonTask.vue";
  import ModalWindow from "~/components/Card/ModalWindow.vue";
  import Card from "@/components/Card/Card.vue"
  import {useStore} from "@/store/store"
  import {ref} from "vue";

  const addTask = useStore()

  let show = ref(true)
  const showModal = function () {
      show.value = true
    }

</script>

<style scoped>

</style>