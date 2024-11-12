import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './_util';

// 财务管理注释 以7开头 例如70000
export const financialManagementDict = {
  70001: '待处理',
  70002: '开票中',
  70003: '已开票',
  70004: '已作废',
  70005: '已冲红',
  70006: '开票失败',
  70011: '使用中',
  70012: '未使用',
};

export default [
  {
    url: '/basic-api/dict',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        ...financialManagementDict,
      });
      // 存在异常
      // return resultError("出现了错误")
    },
  },
] as MockMethod[];
