import { ref, shallowRef } from 'vue'
import type { User } from '../../services/userApi/types'
import { userApiService } from '../../services/userApi/userApi'
import { settings } from '../../config/settings/settings'
import type { UseUsersReturn } from './types'

/**
 * Composable for working with a list of users
 * @module useUsers
 * @description Provides functionality for loading and managing a list of users
 * @returns {UseUsersReturn} Users state and methods
 */
export function useUsers(): UseUsersReturn {
  const users = shallowRef<User[]>([])
  const loading = ref<boolean>(false)
  const page = ref<number>(settings.pagination.initialPage)

  const loadUsersForPage = async (pageNum: number): Promise<void> => {
    try {
      loading.value = true
      const newUsers = await userApiService.fetchUsers(pageNum)
      users.value = newUsers
      page.value = pageNum
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      loading.value = false
    }
  }

  const loadMoreUsers = async (): Promise<void> => {
    if (loading.value) return

    try {
      loading.value = true
      const newUsers = await userApiService.fetchUsers(page.value + 1)
      users.value.push(...newUsers)
      page.value++
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    page,
    loadUsersForPage,
    loadMoreUsers
  }
}
