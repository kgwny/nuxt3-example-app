<script lang="ts" setup>
import type { PictureResponse } from '~/types'

interface Props {
  pictureData: PictureResponse;
}

defineProps<Props>()
</script>

<template>
  <div>
    <img
      class="card-img"
      :src="pictureData.url"
      alt="cute picture"
      :data-testid="pictureData.id"
    >
  </div>
</template>

<style scoped>
.card-img {
  border-radius: 8px;
  width: 320px;
  height: 320px;
  object-fit: cover;
}
</style>
