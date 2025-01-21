/**
 * API configuration settings type
 */
export interface ApiSettings {
  /** Base URL for the Random User API */
  readonly baseUrl: string
  /** Seed for consistent random user data */
  readonly seed: string
  /** Number of results per page */
  readonly resultsPerPage: number
}

/**
 * Pagination configuration settings type
 */
export interface PaginationSettings {
  /** Initial page number when loading the application */
  readonly initialPage: number
  /** Distance in pixels from bottom before loading next page */
  readonly scrollThreshold: number
  /** Page size */
  readonly pageSize: number
}

/**
 * Performance optimization settings type
 */
export interface PerformanceSettings {
  /** Delay in milliseconds between scroll event handling */
  readonly throttleDelay: number
}

/**
 * Application settings and configuration type
 */
export interface Settings {
  /** API configuration settings */
  readonly api: ApiSettings
  /** Pagination configuration settings */
  readonly pagination: PaginationSettings
  /** Performance optimization settings */
  readonly performance: PerformanceSettings
}
