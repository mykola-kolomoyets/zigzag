import { AxiosResponse } from "axios";

import { BaseUser, RegisterUser, RegisterUserResponse, LoginUserResponse, UserData } from '../../types';

import api  from './../';

export default class AuthService {
  static register = (data: RegisterUser): Promise<AxiosResponse<RegisterUserResponse>> => {
    return api.post('/auth/register', data);
  }

  static login = (data: BaseUser): Promise<AxiosResponse<LoginUserResponse>> => {
    return api.post('/auth/login', data);
  }

  static getUser = (id: string): Promise<AxiosResponse<UserData>> => {
    return api.get('/auth', {
      params: { id },
     });
  }
}