<script lang="ts" setup>
import type { PictureResponse } from '~/types'

interface Props {
  pictureList: PictureResponse[];
}

defineProps<Props>()
</script>

<template>
  <div class="picture-card-list" data-testid="picture-list">
    <picture-card v-for="(picture, i) in pictureList" :key="i" :picture-data="picture" />
  </div>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  place-items: center;
  gap: 16px;
}
</style>
