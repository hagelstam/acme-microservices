export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export interface MessageResponse {
  message: string;
}

export interface UserResponse {
  users: string[];
}
