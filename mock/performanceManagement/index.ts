import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from 'mock/_util';
// import { faker } from '@faker-js/faker';
// import { result } from 'lodash-es';
//

// const faker =new Faker({
//   locale:[zh_CN]
// })

function performancemanagement() {
  return {
    result: [
      {
        'key|+1': 1,
        companyname: 'xxx公司',
        standard: '自主招商',
        industry: 'XXX行业',
        number: '武汉市洪山区万科1期B1栋401',
        Signing_time: '1986-10-18',
        Contracted_area: '50m2',
        Contract_unit_price: '100/m2',
        Starting_contract: '2013-11-02~2023-11-01(11年)',
        deposit: '5000/月',
        money: '5000',
        time: '2023-02-20 11:11:11',
        receivable_deposit: '10000元',
        Actual_deposit_received: '10000元',
        name: '苏军',
        commission: '15000元',
        commissioned: '0',
      },
      {
        'key|+1': 2,
        companyname: 'xxx公司',
        standard: '自主招商',
        industry: 'XXX行业',
        number: '武汉市洪山区万科1期B1栋403',
        Signing_time: '1986-10-18',
        Contracted_area: '50m2',
        Contract_unit_price: '100/m2',
        Starting_contract: '2013-11-02~2023-11-01(11年)',
        deposit: '5000/月',
        money: '5000',
        time: '2023-02-20 11:11:11',
        receivable_deposit: '10000元',
        Actual_deposit_received: '10000元',
        name: '苏军',
        commission: '15000元',
        commissioned: '0',
      },
      {
        'key|+1': 3,
        companyname: 'xxx公司',
        standard: '自主招商',
        industry: 'XXX行业',
        number: '武汉市洪山区万科1期B1栋403',
        Signing_time: '1986-10-18',
        Contracted_area: '50m2',
        Contract_unit_price: '100/m2',
        Starting_contract: '2013-11-02~2023-11-01(11年)',
        deposit: '5000/月',
        money: '5000',
        time: '2023-02-20 11:11:11',
        receivable_deposit: '10000元',
        Actual_deposit_received: '10000元',
        name: '苏军',
        commission: '15000元',
        commissioned: '0',
      },
      {
        'key|+1': '总计',
        companyname: '-',
        standard: '-',
        industry: '-',
        number: '-',
        Signing_time: '-',
        Contracted_area: '150m2',
        Contract_unit_price: '-',
        Starting_contract: '-',
        deposit: '15000元/月',
        money: '-',
        time: '-',
        receivable_deposit: '30000',
        Actual_deposit_received: '30000',
        name: '苏军',
        commission: '30000',
        commissioned: '0',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/performanceManagement',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        result: {
          ...performancemanagement(),
        },
      });
    },
  },
] as MockMethod[];
