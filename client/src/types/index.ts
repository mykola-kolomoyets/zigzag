import { StatsStore } from "../utils";

export type BaseUser = {
    _id?: string;
    email: string;
    password: string;
}

export type RegisterUser = BaseUser & {
  name: string;
  language?: string
}

export type RegisterUserResponse = {
  token: string;
  user: RegisterUser & { id?: string };
}

export type LoginUserResponse = {
  token: string;
  user: RegisterUser,
  stats: StatsStore
}

export type UserData = {
  user: RegisterUser
  stats: StatsStore;
}