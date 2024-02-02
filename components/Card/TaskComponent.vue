<template>
  <div>
    <div class="flex m-3 p-2 gap-3 relative justify-center">
      <textarea :value="props.modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                placeholder="Текст задачи..."
                class="active:outline-none resize-none w-full ml-15 h-50 max-h-58 border rounded flex font-bold text-gray-900 sm:text-base sm:tracking-tight justify-center"></textarea>
      <span class="float-right">
          <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
          </svg>
        </span>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    itemTask: {
      type: Object,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  })

  const emits = defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>