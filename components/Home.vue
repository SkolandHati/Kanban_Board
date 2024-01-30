<template>
  <div class="bg-white py-10 relative">
    <div class="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Kanban</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 text-center">Распиши свою жизни на задачи</p>
      <button-task @click="addTask.pushTaskInStore('rgergfdgdfgergreg')"></button-task>
    </div>
    <hr >
    <div class="grid grid-cols-4 gap-4 p-7">
      <Card></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ButtonTask from "~/components/buttons/ButtonTask.vue";
  import Card from "@/components/Card/Card.vue"
  import {useStore} from "@/store/store"

  const addTask = useStore()

</script>

<style scoped>

</style>