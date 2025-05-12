<script lang="ts" setup>
import type { PictureResponse } from '~/types'

const { pending, error, data, refresh } = useFetch<PictureResponse[]>(
  'https://api.thedogapi.com/v1/images/search?limit=10'
)
</script>

<template>
  <div>
    <div class="top">
      <app-title />
      <refresh-button @click="refresh()" />
    </div>

    <div>
      {{ error?.message }}
    </div>

    <div v-show="pending" class="loading-messge">
      <p>データの取得中...</p>
    </div>

    <div v-if="!pending && data" class="content">
      <picture-card-list :picture-list="data" />
    </div>
  </div>
</template>

<style scoped>
.top {
  text-align: center;
}

.content {
  margin: auto;
}

.loading-message {
  text-align: center;
}
</style>
