/**
 * Represents the structure of a user's name
 */
export interface UserName {
  /** Title of address (e.g., Mr., Mrs., Ms.) */
  readonly title: string
  /** User's first name */
  readonly first: string
  /** User's last name */
  readonly last: string
}

/**
 * Represents the structure of user's profile pictures in different sizes
 */
export interface UserPicture {
  /** URL of the large size image */
  readonly large: string
  /** URL of the medium size image */
  readonly medium: string
  /** URL of the thumbnail image */
  readonly thumbnail: string
}

/**
 * Represents the main user information
 */
export interface User {
  /** Object containing user's name information */
  readonly name: UserName
  /** User's email address */
  readonly email: string
  /** Object containing profile picture URLs */
  readonly picture: UserPicture
}

/**
 * Represents the API response structure when requesting random users
 */
export interface RandomUserResponse {
  /** Array of user objects */
  readonly results: User[]
  /** Response metadata */
  info: {
    /** Current page number */
    readonly page: number
    /** Number of results */
    readonly results: number
    /** Seed used for random generation */
    readonly seed: string
    /** API version */
    readonly version: string
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
