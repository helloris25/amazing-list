<template>
  <div class="app">
    <h1>Amazing list</h1>
    <div ref="scrollContainer" class="users-container" @scroll="throttledHandleScroll">
      <div v-show="loading && !users?.length" class="loading">Загрузка...</div>
      <template v-if="users?.length">
        <UserCard v-for="user in users" :key="user.email" :user="user" />
        <div v-show="loading" class="loading">Загрузка...</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import UserCard from './components/UserCard.vue'
  import { throttle } from './utils/throttle'
  import { useUsers } from './composables/useUsers/useUsers'
  import { settings } from './config/settings/settings'

  /** Container reference for scroll handling */
  const scrollContainer = ref<HTMLElement | null>(null)

  const { users, loading, page, loadUsersForPage, loadMoreUsers } = useUsers()

  const updateURL = (pageNum: number): void => {
    const url = new URL(window.location.href)
    url.searchParams.set('page', pageNum.toString())
    window.history.pushState({}, '', url)
  }

  const getInitialPage = (): number => {
    const urlParams = new URLSearchParams(window.location.search)
    const pageParam = urlParams.get('page')
    return pageParam ? parseInt(pageParam, 10) : 1
  }

  const handleScroll = (event: Event): void => {
    const target = event.target as HTMLElement
    const scrollPosition = target.scrollTop + target.clientHeight
    const threshold = target.scrollHeight - settings.pagination.scrollThreshold

    if (scrollPosition >= threshold) {
      loadMoreUsers().then(() => {
        if (page.value !== undefined) {
          updateURL(page.value)
        }
      })
    }
  }

  const throttledHandleScroll = throttle(handleScroll, settings.performance.throttleDelay)

  const handlePopState = (): void => {
    const newPage = getInitialPage()
    if (newPage !== page.value) {
      loadUsersForPage(newPage).then(() => {
        if (page.value !== undefined) {
          updateURL(page.value)
        }
      })
    }
  }

  onMounted(() => {
    const initialPage = getInitialPage()
    page.value = initialPage
    loadUsersForPage(initialPage).then(() => {
      if (page.value !== undefined) {
        updateURL(page.value)
      }
    })
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
