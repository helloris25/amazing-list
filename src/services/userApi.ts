import type { User, RandomUserResponse, ApiError } from '../types/userApi'

/**
 * Class for handling Random User API requests
 */
export class UserApiService {
  private readonly baseUrl = 'https://randomuser.me/api'
  private readonly seed = 'abc'
  private readonly resultsPerPage = 10

  /**
   * Fetches users from the RandomUser API
   * @param {number} page - Page number to fetch
   * @returns {Promise<User[]>} Array of user objects
   * @throws {ApiError} When the API request fails
   */
  async fetchUsers(page: number): Promise<User[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/?page=${page}&results=${this.resultsPerPage}&seed=${this.seed}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: RandomUserResponse = await response.json()
      return data.results
    } catch (error) {
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }
      throw apiError
    }
  }
}

export const userApiService = new UserApiService() 