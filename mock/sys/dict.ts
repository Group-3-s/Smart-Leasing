import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

// 预定首页
const BookingmanagementDict = {
  31001: '已入住',
  31002: '待入住',
  31003: '待生效',
  31004: '已退定',
  31005: '无效',
};

export default [
  {
    url: '/basic-api/dict',
    timeout: 200,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        ...BookingmanagementDict,
      }); //存在异常 // return resultError(“出现问题”);
    },
  }, // mock user login
] as MockMethod[];
