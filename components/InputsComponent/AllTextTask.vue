<template>
  <div class="px-4 py-2 bg-white border-solid border-2 border-indigo-600 rounded dark:bg-gray-700">
    <textarea :value="props.modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              id="editor" rows="8" class="outline-none block w-full px-0 text-sm text-gray-800 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
  </div>
</template>

<script setup>

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
  })

  const emits = defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>