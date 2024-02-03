<template>
  <transition name="modal">
    <div id="modal-shadow"
         class="lg:block lg:items-center lg:justify-between border rounded">
      <div id="modal">
        <div class="grid min-w-0 flex-1r py-2 pb-5 gap-y-3">
          <h3 v-if="show"
              class="relative flex justify-center text-center">Название колонки</h3>
          <h3 v-else
              class="relative flex justify-center text-center text-red-800">Сначала введите название колонки</h3>
          <input v-model="nameColums"
                 placeholder="Введите название колонки"
                 id="input"
                 class="border rounded flex font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight justify-center">
        </div>
        <ButtonColums add-item="Добавить задачу"
                      delite-item="Закрыть окно"
                      @append-task="upTask"
                      @close-window="closeModal"></ButtonColums>
        <hr>
        <div class="block_task" v-if="!!tasksColums.length">
          <TaskComponent v-for="(item , i) in tasksColums"
                         :key="i"
                         :modelValue="item.text"
                         :setting="true"
                         v-model="item.text"
                         @delete-task="taskDelet(item.id)">
          </TaskComponent>
        </div>
        <hr>
        <ButtonTask :name="'Создать колонку'" @appendColumInStore="appendTaskInStore"></ButtonTask>
      </div>
    </div>
  </transition>
</template>

<script setup>

  import ButtonColums from "~/components/buttons/ButtonColums.vue";
  import ButtonTask from "~/components/buttons/ButtonTask.vue";
  import TaskComponent from "~/components/Card/TaskComponent.vue";
  import {useStore} from "~/store/store.js"
  import Enum from "~/Enum/EnumColums.js";
  import {ref} from "vue";

  const submitColum = useStore()

  let show = ref(true)

  let columsTask = ref({})
  let nameColums = ref('')

  let tasksColums = ref([])
  let textTask = ref('')

  let idTask = ref(1)
  const appendTaskInStore = function (marker){
    switch (marker){
      case Enum[0]:
        columsTask.value.nameColums = nameColums.value
        columsTask.value.tasks = tasksColums.value
        submitColum.addColumInStore(columsTask.value)
        closeModal()
        columsTask.value = {}
        nameColums.value = ''
        tasksColums.value = []
        textTask.value = ''
        idTask.value = 1
        break;
    }
  }
  function upTask() {
    if (!nameColums.value.length){
      show.value = !show.value
      return
    }
    let task = {}
    show.value = true
    task.id = idTask.value
    task.text = textTask.value
    tasksColums.value.push(task)
    idTask.value++
  }

  function taskDelet(data){
    let item = tasksColums.value.find(i => i.id === data)
    tasksColums.value.splice(item, 1)
  }

  const emits = defineEmits(['closeWindow'])
  function closeModal(){
    emits('closeWindow')
  }

</script>

<style scoped>

  #modal-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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

  .modal-leave-active {
    transition: opacity 2s
  }
  .modal-enter-active, .modal-leave-to {
    opacity: 0
  }

  #input{
    font-size: 18px;
  }

</style>