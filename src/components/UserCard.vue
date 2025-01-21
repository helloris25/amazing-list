<template>
  <div class="user-card">
    <img :src="user.picture.medium" :alt="fullName" class="user-avatar" />
    <div class="user-info">
      <h3>{{ fullName }}</h3>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '../types/userApi'

interface Props {
  user: User;
  loading?: boolean;
}

const props = defineProps<Props>()

const fullName = computed(() => {
  const { title, first, last } = props.user.name
  return `${title}. ${first} ${last}`
})
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
}

.user-info {
  flex: 1;
}

.user-info h3 {
  margin: 0 0 0.5rem 0;
}

.user-info p {
  margin: 0;
  color: #666;
}
</style> 