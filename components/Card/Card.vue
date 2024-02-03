<template>
  <div v-if="props.itemColum"
       class="lg:block lg:items-center lg:justify-between border rounded"
       @drop="onDrop($event, props.itemColum.nameColums)"
       @dragover.prevent
       @dragenter.prevent>
    <div class="min-w-0 flex-1r py-5">
      <h2 class="flex text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight justify-center">
        {{props.itemColum.nameColums}}
      </h2>
    </div>
    <ButtonColums :add-item="'Добавить задачу'"
                  delite-item="Удалить"
                  @closeWindow="deliteButton(props.itemColum.nameColums)"
                  @appendTask="buttonShow"></ButtonColums>
    <hr>
    <div class="droppable"
         v-if="!!props.itemColum.tasks.length">
      <h2 class="flex justify-center items-center py-2">ЗАДАЧИ</h2>
      <div class="draggable break-words cursor-pointer whitespace-nowrap hover:bg-sky-100 overflow-hidden block border rounded m-3 p-2"
           v-for="(item, i) in props.itemColum.tasks"
           :key="i"
           @dragstart="onDragStart($event, item, i)"
           draggable="true">
        <p class="min-h-6 w-250">
          <button class="float-right relative bg-white"
                  @click="buttonDeleteTaskInColums(item.id)">
            <svg class="h-6 w-6 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>{{item.text}}</p>
      </div>
    </div>
  </div>
  <ModalInputTask v-if="show"
                  :item-colum="props.itemColum.nameColums"
                  @submitTaskInColum="appendTaskInColum"
                  @closeWindow="buttonShow"></ModalInputTask>
</template>

<script setup>

  import ButtonColums from "~/components/buttons/ButtonColums.vue";
  import ModalInputTask from "~/components/ModalComponent/ModalInputTask.vue";
  import {useStore} from "~/store/store.js";
  import {ref} from "vue";

  const store = useStore()

  const props = defineProps({
    itemColum: {
      type: Object,
      required: true
    },
  })

  function appendTaskInColum(data) {
    let id = 1
    props.itemColum.tasks.forEach((item, index) => {
      id += props.itemColum.tasks[index].id
    })
    store.addTaskInColum(id, data, props.itemColum.nameColums)
  }
  function deliteButton(nameColum) {
    store.deliteColum(nameColum)
  }

  function buttonDeleteTaskInColums(data) {
    store.deleteTaskInColums(data, props.itemColum.nameColums)
    if (!props.itemColum.tasks.length){
      store.deliteColum(props.itemColum.nameColums)
    }
  }

  let show = ref(false)

  function buttonShow(){
    show.value = !show.value
  }

  function onDragStart(e, itemTask, ind){
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('item', JSON.stringify(itemTask))
    let index =  store.colums.findIndex(i => i.nameColums === props.itemColum.nameColums)
    console.log(index, ind)
    // store.colums[index].tasks.splice(ind, 1)
  }

  function onDrop(e, columName){
    let id = 1
    const item = JSON.parse(e.dataTransfer.getData('item'))
    let index =  store.colums.findIndex(i => i.nameColums === columName)
    id += props.itemColum.tasks.length
    item.id = id
    store.colums[index].tasks.push(item)
  }

</script>

<style scoped>

</style>