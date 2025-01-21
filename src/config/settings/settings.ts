import type { Settings } from './types'

/**
 * Application settings and configuration values
 */
export const settings: Settings = {
  api: {
    baseUrl: 'https://randomuser.me/api',
    seed: 'abc',
    resultsPerPage: 10
  },
  pagination: {
    initialPage: 1,
    scrollThreshold: 100,
    pageSize: 10
  },
  performance: {
    throttleDelay: 100
  }
} as const
