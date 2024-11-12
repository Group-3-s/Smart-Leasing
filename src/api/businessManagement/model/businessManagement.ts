export interface userListParams {
  type: 'private' | 'public';
  baseId: string;
}
// 使用enum关键字定义枚举类型

export enum Departmentalrole {
  '财务' = 1,
  '公寓管家' = 2,
  '总经理' = 3,
}

export interface userListResult {
  id: number;
  status: string;
  employeeID: string;
  employeeName: string;
  phone: string;
  age: string;
  mailbox: string;
  branch: string;
  departmentalrole: Departmentalrole;
}
