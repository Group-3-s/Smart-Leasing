import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

function userList() {
  return {
    result: [
      {
        id: 1,
        status: '正常',
        employeeID: '-',
        employeeName: '曾洋',
        phone: '18651871986',
        age: '5',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
      {
        id: 2,
        status: '正常',
        employeeID: '-',
        employeeName: '汪秀兰',
        phone: '18129169784',
        age: '16',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
      {
        id: 3,
        status: '正常',
        employeeID: '-',
        employeeName: '郑明',
        phone: '19875535865',
        age: '10',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '3',
      },
      {
        id: 4,
        status: '正常',
        employeeID: '-',
        employeeName: '潘明',
        phone: '18198970522',
        age: '19',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
      {
        id: 5,
        status: '正常',
        employeeID: '-',
        employeeName: '钱明',
        phone: '19828498741',
        age: '18',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
      {
        id: 6,
        status: '正常',
        employeeID: '-',
        employeeName: '万刚',
        phone: '19838988438',
        age: '13',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '1',
      },
      {
        id: 7,
        status: '正常',
        employeeID: '-',
        employeeName: '吴静',
        phone: '13143689953',
        age: '4',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '3',
      },
      {
        id: 8,
        status: '正常',
        employeeID: '-',
        employeeName: '熊娜',
        phone: '13731755165',
        age: '6',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '3',
      },
      {
        id: 9,
        status: '正常',
        employeeID: '-',
        employeeName: '杨娜',
        phone: '18166221773',
        age: '5',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '3',
      },
      {
        id: 10,
        status: '正常',
        employeeID: '-',
        employeeName: '黎强',
        phone: '13861517566',
        age: '20',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '3',
      },
      {
        id: 11,
        status: '正常',
        employeeID: '-',
        employeeName: '林勇',
        phone: '19826586376',
        age: '1',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
    ],
  };
}
function forbiddenList() {
  return {
    forbidden: [
      {
        id: 1,
        status: '禁用',
        employeeID: '-',
        employeeName: '林勇',
        phone: '19826586376',
        age: '1',
        mailbox: '-',
        branch: '(直属)软新',
        departmentalrole: '2',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/businessManagement',
    timeout: 200,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        ...userList(),
        ...forbiddenList(),
      }); //存在异常 // return resultError(“出现问题”);
    },
  }, // mock user login
] as MockMethod[];
