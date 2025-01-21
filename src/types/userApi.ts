/** 
 * Represents the structure of a user's name
 * @interface UserName
 */
export interface UserName {
    title: string;
    first: string;
    last: string;
}

/**
 * Represents the structure of user's profile pictures in different sizes
 * @interface UserPicture
 */
export interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

/**
 * Represents the main user information
 * @interface User
 */
export interface User {
    name: UserName;
    email: string;
    picture: UserPicture;
}

/**
 * Represents the API response structure when requesting random users
 * @interface RandomUserResponse
 */
export interface RandomUserResponse {
    results: User[];
    info: {
        page: number;
        results: number;
        seed: string;
        version: string;
    };
}

/**
 * Represents the API error structure
 * @interface ApiError
 */
export interface ApiError {
    message: string;
    code?: number;
} 