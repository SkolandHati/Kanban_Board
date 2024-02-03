<template>
  <transition name="modal_task">
    <div id="modal-shadow" class="lg:block lg:items-center lg:justify-between border rounded">
      <div id="modal" class="relative grid gap-3">
        <h3 class="justify-center text-center text-2xl">{{props.itemColum}}</h3>
        <h2 v-if="check"
            id="warning"
            class="justify-center text-center text-base text-red-800">Задача не может жить без текста :(</h2>
        <TaskComponent :model-value="text"
                       v-model="text"
                       @up-task="addTask"
                       @delete-task="close"></TaskComponent>
      </div>
    </div>
  </transition>
</template>

<script setup>

  import TaskComponent from "~/components/Card/TaskComponent.vue";
  import {ref} from "vue";

  const props = defineProps({
    itemColum:{
      type: String,
      required: true
    }
  })

  const emits = defineEmits(['closeWindow', 'submitTaskInColum'])

  function close(){
    emits('closeWindow')
  }

  let text = ref('')

  let check = ref(false)

  function addTask(){
    console.log(text.value)
    if (!text.value.length){
      check.value = true
      return
    }
    console.log(text.value)
    emits("submitTaskInColum", text.value)
    close()
  }

</script>

<style scoped>

  #modal-shadow {
    position: fixed;
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

  #warning{
    opacity: 0;
    animation: ani 2.5s forwards;
  }

  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

</style>