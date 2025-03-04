import { GetCodeResponse, LoginResponse } from './types';

const BASE_URL = 'https://api.grekland.ru/api';

export const authApi = {
  async getCode(phone: string): Promise<GetCodeResponse> {
    const response = await fetch(`${BASE_URL}/getCode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
    });

    if (!response.ok) {
      throw new Error('Failed to get code');
    }

    const data = await response.json();
    console.log('API getCode response:', data);
    return data;
  },

  async login(phone: string, sms_code: string): Promise<LoginResponse> {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
      body: JSON.stringify({ phone, sms_code }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return response.json();
  },
}; 