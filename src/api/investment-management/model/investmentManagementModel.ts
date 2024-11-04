export interface clientListParams {
  type: 'private' | 'public';
  baseId: string;
}
// 使用enum关键字定义枚举类型

export enum Status {
  '问询' = 0,
  '看房' = 1,
  '丢失' = 2,
  '关闭' = 3,
}

export enum Channel {
  '广告' = 0,
  '朋友推荐' = 1,
  '行业协会' = 2,
}

export interface clientListResult {
  id: number;
  name: string;
  phone: string;
  intention: string;
  status: Status;
  transactor: string;
  createTime: string;
  lastContactDate: string;
  nextContactDate: string;
  channel: Channel;
  remark: string;
}
