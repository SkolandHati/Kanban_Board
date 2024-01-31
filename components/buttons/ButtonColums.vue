<template>
  <div class="mt-5 flex lg:mt-0 justify-center pb-4">
      <span class="hidden sm:block">
        <button @click="appendTaskInStore('appendTask')" type="button" class="max-w-100 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
          </svg>
          {{ props.addItem }}
        </button>
      </span>
    <span class="ml-3 hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
            </svg>
          {{ props.deliteItem }}
        </button>
      </span>
  </div>
  {{messageTask.value}}
</template>

<script setup>

  import {ref} from "vue";
  import Enum from "~/Enum/EnumColums.js";

  const props = defineProps({
    addItem: {
      type: String,
      required: true
    },
    deliteItem:{
      type: String,
      required: true
    },
    messageTask:{
      type: String,
      required: true
    }
  })
  // let colums = ref([])
  // let i = 1
  // const appendTaskInStore =  function (marker){
  //   const list = ['appendTask']
  //   console.log(colums.value)
  //   switch (marker){
  //     case list[0]:
  //       colums.value.push(i)
  //       i++
  //       break;
  //   }
  // }

</script>

<style scoped>

</style>