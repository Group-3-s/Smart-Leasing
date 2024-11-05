// 使用enum关键字定义枚举类型

export enum Status {
  '-' = 0,
  '已入住' = 1,
  '待入住' = 2,
  '待生效' = 3,
  '已退定' = 4,
  '无效' = 5,
}

export enum Type {
  '-' = 0,
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
