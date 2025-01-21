import { ref } from 'vue'
import type { User } from '../../services/userApi/types'

/**
 * Return type for useUsers composable
 */
export interface UseUsersReturn {
  /** List of users */
  users: ReturnType<typeof ref<User[]>>
  /** Loading state */
  loading: ReturnType<typeof ref<boolean>>
  /** Current page */
  page: ReturnType<typeof ref<number>>
  /**
   * Loads users for specific page
   * @param pageNum - Page number to load
   */
  loadUsersForPage: (pageNum: number) => Promise<void>
  /**
   * Loads next page and appends users
   */
  loadMoreUsers: () => Promise<void>
}
