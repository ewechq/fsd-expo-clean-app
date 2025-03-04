export interface GetCodeResponse {
  success: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface AuthError {
  message: string;
  status: number;
} 