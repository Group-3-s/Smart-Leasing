import { defHttp } from '/@/utils/http/axios';

export function getInvestmentManagement() {
  return defHttp.get({ url: '/businessManagement' });
}
