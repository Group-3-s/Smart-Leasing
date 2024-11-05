import { defHttp } from '/@/utils/http/axios';

export function getBookingmanagement() {
  return defHttp.get({ url: '/contractManagement/Bookingmanagement' });
}
