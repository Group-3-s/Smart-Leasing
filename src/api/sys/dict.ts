import { defHttp } from '/@/utils/http/axios';

enum Api {
  dict = '/dict',
}

export function getSysDict() {
  return defHttp.get({ url: Api.dict });
}
