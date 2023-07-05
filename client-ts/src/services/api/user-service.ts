import { AxiosResponse } from 'axios';
import $api from '@/services/shared/my-axios.ts';

import { IUser } from '@/types/IUser.ts';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get('/users');
  }
}
