<template>
  <div>
    <div class="flex m-3 p-2 gap-3 relative justify-center">
      <textarea :value="props.modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                placeholder="Текст задачи..."
                class="active:outline-none resize-none w-full ml-15 h-50 max-h-58 border rounded flex font-bold text-gray-900 sm:text-base sm:tracking-tight justify-center"></textarea>
      <div id="block_buttons" class="contents gap-2" :class="{active: !props.setting}">
        <button v-if="!props.setting"
                @click="submitTask"
                class="float-right flex justify-center items-center">
          <svg id="block" v-if="props.setting" :class="{active: !props.setting}" class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
          </svg>
          <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
        </button>
        <button @click="deletTask"
                class="float-right">
          <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    setting:{
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(['update:modelValue', 'deleteTask', 'upTask'])

  function submitTask(){
    emits('upTask')
  }

  function deletTask(){
    emits('deleteTask')
  }

</script>

<style scoped>

  #block_buttons.active{
    display: grid;
  }

  :deep(#block.active){
    display: flex;
    margin-right: 0;
  }

</style>