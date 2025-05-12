<script lang="ts" setup>
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="refresh-button" data-testid="refresh-button" @click="handleClick">
    reload
  </button>
</template>

<style scoped>
.refresh-button {
  margin: 24px auto;
  display: block;
  cursor: pointer;
  width: 450px;
  background-color: #8e6bf0;
  border: none;
  padding: 8px;
  border-radius: 8px;
}
</style>
