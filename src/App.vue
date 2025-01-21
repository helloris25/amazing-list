<template>
  <div class="app">
    <h1>Amazing list</h1>
    <div class="users-container" @scroll="throttledHandleScroll" ref="scrollContainer">
      <div v-if="loading && !users.length" class="loading">Загрузка...</div>
      <template v-else>
        <UserCard 
          v-for="user in users" 
          :key="user.email" 
          :user="user" 
        />
        <div v-if="loading" class="loading">Загрузка...</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { User } from './types/userApi'
import { userApiService } from './services/userApi'
import UserCard from './components/UserCard.vue'
import { throttle } from './utils/throttle'

const users = ref<User[]>([])
const loading = ref<boolean>(false)
const page = ref<number>(1)
const scrollContainer = ref<HTMLElement | null>(null)

/**
 * Updates URL with current page number
 * @param {number} pageNum - Current page number
 */
const updateURL = (pageNum: number): void => {
  const url = new URL(window.location.href)
  url.searchParams.set('page', pageNum.toString())
  window.history.pushState({}, '', url)
}

/**
 * Gets initial page number from URL or defaults to 1
 * @returns {number} Initial page number
 */
const getInitialPage = (): number => {
  const urlParams = new URLSearchParams(window.location.search)
  const pageParam = urlParams.get('page')
  return pageParam ? parseInt(pageParam, 10) : 1
}

/**
 * Loads users for a specific page
 * @param {number} pageNum - Page number to load
 */
const loadUsersForPage = async (pageNum: number): Promise<void> => {
  try {
    loading.value = true
    const newUsers = await userApiService.fetchUsers(pageNum)
    users.value = newUsers
    page.value = pageNum
    updateURL(pageNum)
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
}

/**
 * Loads more users and adds them to the existing list
 */
const loadMoreUsers = async (): Promise<void> => {
  if (loading.value) return

  try {
    loading.value = true
    const newUsers = await userApiService.fetchUsers(page.value + 1)
    users.value = [...users.value, ...newUsers]
    page.value++
    updateURL(page.value)
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
}

/**
 * Base scroll handler
 * @param {Event} event - Scroll event
 */
const handleScroll = (event: Event): void => {
  const target = event.target as HTMLElement
  const scrollPosition = target.scrollTop + target.clientHeight
  const threshold = target.scrollHeight - 100

  if (scrollPosition >= threshold) {
    loadMoreUsers()
  }
}

const throttledHandleScroll = throttle(handleScroll, 100)

const handlePopState = (): void => {
  const newPage = getInitialPage()
  if (newPage !== page.value) {
    loadUsersForPage(newPage)
  }
}

watch(page, (newPage: number) => {
  updateURL(newPage)
})

onMounted(() => {
  page.value = getInitialPage()
  loadUsersForPage(page.value)

  window.addEventListener('popstate', handlePopState)
})
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.users-container {
  height: 80vh;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #f5f5f5;
}

.loading {
  text-align: center;
  padding: 1rem;
  color: #666;
}
</style> 