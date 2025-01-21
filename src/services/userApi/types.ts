/**
 * Represents the structure of a user's name
 */
export interface UserName {
  /** Title of address (e.g., Mr., Mrs., Ms.) */
  title: string
  /** User's first name */
  first: string
  /** User's last name */
  last: string
}

/**
 * Represents the structure of user's profile pictures in different sizes
 */
export interface UserPicture {
  /** URL of the large size image */
  large: string
  /** URL of the medium size image */
  medium: string
  /** URL of the thumbnail image */
  thumbnail: string
}

/**
 * Represents the main user information
 */
export interface User {
  /** Object containing user's name information */
  name: UserName
  /** User's email address */
  email: string
  /** Object containing profile picture URLs */
  picture: UserPicture
}

/**
 * Represents the API response structure when requesting random users
 */
export interface RandomUserResponse {
  /** Array of user objects */
  results: User[]
  /** Response metadata */
  info: {
    /** Current page number */
    page: number
    /** Number of results */
    results: number
    /** Seed used for random generation */
    seed: string
    /** API version */
    version: string
  }
}

/**
 * Represents the API error structure
 */
export interface ApiError {
  /** Error message */
  message: string
  /** Error code (optional) */
  code?: number
}
