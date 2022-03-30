import { AxiosResponse } from "axios";
import { StatsStore } from "../../utils";

import api  from './../';

export default class StatsService {
  static get = (id: string): Promise<AxiosResponse<StatsStore>> => {
    return api.get('/stats', {
      params: { id }
    });
  }

  static update = (id: string, data: Partial<StatsStore>): Promise<AxiosResponse<StatsStore>> => {
    return api.post('/stats/update', {
      params: { id },
      data
    });
  }
}