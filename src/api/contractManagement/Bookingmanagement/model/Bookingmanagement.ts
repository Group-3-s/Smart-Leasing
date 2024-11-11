// 使用enum关键字定义枚举类型

export enum Status {
  '已入住' = 31001,
  '待入住' = 31002,
  '待生效' = 31003,
  '已退定' = 31004,
  '无效' = 31005,
}

export enum Type {
  '公寓' = 1,
  '办公楼' = 2,
  '厂房' = 3,
}

export interface clientListResult {
  id: number;
  status: Status;
  type: Type;
  Availability: string;
  createTime: string;
  Duration: string;
  person: string;
  price: string;
  serial: string;
}
