<template>
  <div class="mt-5 flex lg:mt-0 justify-center pb-4">
      <span class="hidden sm:block">
        <button @click="appTask"
                type="button"
                 class="max-w-100 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
          </svg>
          {{ props.addItem }}
        </button>
      </span>
    <span class="ml-3 hidden sm:block">
        <button @click="close" type="button"
                class="gap-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="h-5 w-5 top-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
          {{ props.deliteItem }}
        </button>
      </span>
  </div>
</template>

<script setup>
  import { defineEmits } from 'vue'

  const props = defineProps({
    addItem: {
      type: String,
      required: true
    },
    deliteItem: {
      type: String,
      required: true
    },
  })

  const emits = defineEmits(['appendTask', 'submitTask', 'closeWindow'])

  const appTask = function () {
      emits('appendTask')
  }

  const close = function () {
    emits('closeWindow')
  }

</script>

<style scoped>

</style>