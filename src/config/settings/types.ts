/**
 * API configuration settings type
 */
export interface ApiSettings {
  /** Base URL for the Random User API */
  baseUrl: string
  /** Seed for consistent random user data */
  seed: string
  /** Number of results per page */
  resultsPerPage: number
}

/**
 * Pagination configuration settings type
 */
export interface PaginationSettings {
  /** Initial page number when loading the application */
  initialPage: number
  /** Distance in pixels from bottom before loading next page */
  scrollThreshold: number
  /** Page size */
  pageSize: number
}

/**
 * Performance optimization settings type
 */
export interface PerformanceSettings {
  /** Delay in milliseconds between scroll event handling */
  throttleDelay: number
}

/**
 * Application settings and configuration type
 */
export interface Settings {
  /** API configuration settings */
  api: ApiSettings
  /** Pagination configuration settings */
  pagination: PaginationSettings
  /** Performance optimization settings */
  performance: PerformanceSettings
}
