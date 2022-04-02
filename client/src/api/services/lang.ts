import { AxiosResponse } from "axios";
import { RegisterUser, UserData } from "../../types";

import api  from './../';

export default class LangService {
  static updateLang = (id: string, language: string): Promise<AxiosResponse<RegisterUser>> => {
    return api.post('/lang', {
      params: { id },
      data: { language }
    });
  }
}