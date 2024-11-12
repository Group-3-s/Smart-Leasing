import { defHttp } from '/@/utils/http/axios';
export function getmanageData() {
  return defHttp.get({ url: '/performanceManagement' });
}
