import { AxiosResponse } from "axios";

import api  from './../';

type SendEmail = {
  text: string;
  field: string[][];
}
export default class EmailService {
  static sendEmail = (data: SendEmail): Promise<AxiosResponse<void>> => {
    return api.post('/email', data);
  }
}