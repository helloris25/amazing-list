import type { User, RandomUserResponse, ApiError } from './types'
import { settings } from '../../config/settings/settings'

/**
 * Service for handling user API requests
 */
export class UserApiService {
  /**
   * Fetches users for a specific page
   * @param page - Page number to fetch
   * @returns Promise with array of users
   * @throws {ApiError} When the request fails
   */
  async fetchUsers(page: number): Promise<User[]> {
    try {
      const response = await fetch(
        `${settings.api.baseUrl}/?page=${page}&results=${settings.api.resultsPerPage}&seed=${settings.api.seed}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: RandomUserResponse = await response.json()
      return data.results
    } catch (error) {
      throw {
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      } as ApiError
    }
  }
}

export const userApiService = new UserApiService()
