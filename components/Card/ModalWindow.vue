<template>
  <transition name="modal">
    <div id="modal-shadow" class="lg:block lg:items-center lg:justify-between border rounded">
      <div id="modal">
        <div class="grid min-w-0 flex-1r py-2 pb-5 gap-y-3">
          <h3 class="relative flex justify-center text-center">Название колонки</h3>
          <h3 class="relative flex justify-center text-center text-red-800">Сначала введите название колонки</h3>
          <input v-bind="colums" placeholder="Введите название колонки" id="input" class=" border rounded flex font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight justify-center">
        </div>
        <ButtonColums add-item="Добавить задачу"
                      delite-item="Закрыть окно"
                      :messageTask="colums"></ButtonColums>
        <hr>
        <div class="block_task" v-if="!!colums.length">
          <TaskComponent v-for="item in colums"
                         :item-task="item">
          </TaskComponent>
        </div>
        <hr>
        <ButtonTask :name="'Создать колонку'" @click="submitTask"></ButtonTask>
      </div>
    </div>
  </transition>
</template>

<script setup>

  import ButtonColums from "~/components/buttons/ButtonColums.vue";
  import ButtonTask from "~/components/buttons/ButtonTask.vue";
  import TaskComponent from "~/components/Card/TaskComponent.vue";
  import {ref} from "vue";

  let colums = ref('')
  // let show = ref(false)
  // const closeModal = function () { this.show = false }

  const submitTask = function () {
  }
  const appendTask = function () {
    let i = 1
    colums.value.id = i
    i++
  }

</script>

<style scoped>

  #modal-shadow {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.39);
  }
  #modal {
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    min-width: 420px;
    max-width: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity 2s
  }

  .modal-enter-active, .modal-leave-to {
    opacity: 0
  }

  #input{
    font-size: 18px;
  }

</style>