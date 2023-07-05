import $api from '@/services/shared/my-axios.ts';
import { AuthResponse } from '@/types/response/auth-response.ts';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', { email, password });
  }

  static async registration(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
}
