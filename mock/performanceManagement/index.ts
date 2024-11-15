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
function CommissionSummary() {
  return {
    summary: [
      {
        'key|+1': 1,
        peopleName: '苏军-13579997777',
        position: '招商专员',
        contractNumber: 'xx合同1401',
        contractAmount: '15000元',
        paymentRatio: '100%',
        paymentAmount: '',
        paymentPercentage: '',
        paymentArea: '',
        paymentCoefficient: '',
        paymentDate: '2023-03-01',
        paymentDue: '15000元',
        additionalPayment: '2000元',
        totalPayment: '7500元',
      },
      {
        'key|+1': 2,
        peopleName: '苏军-13579997777',
        position: '招商主管',
        contractNumber: 'xx合同1402',
        contractAmount: '',
        paymentRatio: '',
        paymentAmount: '10000元',
        paymentPercentage: '50%',
        paymentArea: '',
        paymentCoefficient: '',
        paymentDate: '2023-03-01',
        paymentDue: '10000元',
        additionalPayment: '2000元',
        totalPayment: '10000元',
      },
      {
        'key|+1': 3,
        peopleName: '苏军-13579997777',
        position: '招商主管',
        contractNumber: 'xx合同1403',
        contractAmount: '10000元',
        paymentRatio: '100%',
        paymentAmount: '',
        paymentPercentage: '',
        paymentArea: '',
        paymentCoefficient: '',
        paymentDate: '2023-03-01',
        paymentDue: '10000元',
        additionalPayment: '',
        totalPayment: '5000元',
      },
      {
        'key|+1': 4,
        peopleName: '苏军-13579997777',
        position: '招商经理',
        contractNumber: 'xx合同1404',
        contractAmount: '',
        paymentRatio: '',
        paymentAmount: '',
        paymentPercentage: '',
        paymentArea: '10000m²',
        paymentCoefficient: '+0.5',
        paymentDate: '2023-03-01',
        paymentDue: '5000元',
        additionalPayment: '0元',
        totalPayment: '5000元',
      },
      {
        'key|+1': '总计',
        peopleName: '-',
        position: '-',
        contractNumber: '-',
        contractAmount: '25000元',
        paymentRatio: '-',
        paymentAmount: '10000元',
        paymentPercentage: '-',
        paymentArea: '10000m²',
        paymentCoefficient: '-',
        paymentDate: '2023-03-01',
        paymentDue: '40000元',
        additionalPayment: '4000元',
        totalPayment: '27500元',
      },
    ],
  };
}
function roomCommission() {
  return {
    room: [
      {
        'key|+1': 1,
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '5000',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 2,
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '10000',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 3,
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '5000',
        PaidCommissionAmount: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 4,
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        PaidCommissionAmount: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 5,
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        PaidCommissionAmount: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': '',
        roomname: '总计',
        contracttime: '-',
        TotalCommissionAmount: '25000',
        PaidCommissionAmount: '17500',
        LatestDistributionTime: '',
      },
    ],
  };
}
function peopleCommission() {
  return {
    people: [
      {
        'key|+1': 1,
        people: '苏军-13579999988',
        position: '招商专员',
        room: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        OverduePayment: '0元',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 2,
        people: '苏军-13579999988',
        position: '招商专员',
        room: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        OverduePayment: '0元',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 3,
        people: '苏军-13579999988',
        position: '招商专员',
        room: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        OverduePayment: '0元',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 4,
        people: '苏军-13579999988',
        position: '招商专员',
        room: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        OverduePayment: '0元',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 5,
        people: '苏军-13579999988',
        position: '招商专员',
        room: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        OverduePayment: '0元',
        PaidCommissionAmount: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': '',
        people: '总计',
        position: '-',
        room: '-',
        contracttime: '-',
        TotalCommissionAmount: '25000',
        OverduePayment: '0',
        PaidCommissionAmount: '17500',
        LatestDistributionTime: '-',
      },
    ],
  };
}
function CommissionAllocation() {
  return {
    commission: [
      {
        commission_standard: '全民营销',
        industry: '行业内',
        contract_type: '新签',
        contract_time: '<1年',
      },
      {
        commission_standard: '自主招商',
        industry: '行业内',
        contract_type: '新签',
        contract_time: '1年<=X<2年',
      },
      {
        commission_standard: '自主招商',
        industry: '行业外',
        contract_type: '新签',
        contract_time: '2年<=X<3年',
      },
      {
        commission_standard: '产业合作部网络渠道',
        industry: '行业内',
        contract_type: '新签',
        contract_time: '>=3年',
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
        summary: {
          ...CommissionSummary(),
        },
        room: {
          ...roomCommission(),
        },
        people: {
          ...peopleCommission(),
        },
        commission: {
          ...CommissionAllocation(),
        },
      });
    },
  },
] as MockMethod[];
