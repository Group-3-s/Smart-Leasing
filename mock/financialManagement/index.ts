import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from 'mock/_util';

function createAuditList() {
  return {
    auditManagement: {
      invoicingFailed: '@integer(0,5)',
      alreadyRed: '@integer(0,5)',
      toVoid: '@integer(0,5)',
      money: '@integer(5106000,5107000)元',
    },
  };
}
function createOutputDefail() {
  return {
    outputdetail: {
      currentState: '@pick(["使用中"])',
      enterpriseName: '@province()@city()发展有限公司',
      enterpriseTaxNumber:
        '914@integer(200,300)00@string("upper",2)@integer(0,9)@string("upper",5)@integer(0,9)@character("upper")',
      relatedAccounts: '@pick(["已关联","未关联"])',
      enterprisePhone:
        '@pick(["0710","0250","0533","0184","027","081","055"])-@integer(50000000,70000000)',
      enterpriseRegisteredAddress:
        '@province()@city()@county@cword(2,4)路@natural(1,1000)号软件新城1.1期@character("upper")@integer(0,9)（原@character("upper")@integer(0,9)栋）0@integer(0,9)号',
      authorizedBindingPerson: '@cname',
      bindingTime: '@datetime',
      invoiceExtensionNumber: '@integer(0,5)',
    },
  };
}
function createOpeningBank() {
  return {
    openingBank: [
      {
        bank: '@pick(["中国工商银行","中国农业银行","中国银行","中国建设银行","交通银行","招商银行"])',
        bankAccount: '@string("number",16,19)',
      },
    ],
  };
}
function createInvoiceList() {
  return {
    invoiceList: [
      {
        id: 1,
        status: 70001,
        apply_entrance: '',
        buyer_type: '',
        buyer_name: '',
        buyer_tax_number: '',
        main_product_name: '',
        main_commodity_tax_rate: '',
        invoice_amount: '',
        tax_amount: '',
        total: '',
        invoice_issued_number: '',
        applicant: '',
        application_time: '',
        related_bill: '',
        operation: '',
      },
      {
        id: 2,
        status: 70002,
        apply_entrance: '',
        buyer_type: '',
        buyer_name: '',
        buyer_tax_number: '',
        main_product_name: '',
        main_commodity_tax_rate: '',
        invoice_amount: '',
        tax_amount: '',
        total: '',
        invoice_issued_number: '',
        applicant: '',
        application_time: '',
        related_bill: '',
        operation: '',
      },
      {
        id: 3,
        status: 70003,
        apply_entrance: '',
        buyer_type: '',
        buyer_name: '',
        buyer_tax_number: '',
        main_product_name: '',
        main_commodity_tax_rate: '',
        invoice_amount: '',
        tax_amount: '',
        total: '',
        invoice_issued_number: '',
        applicant: '',
        application_time: '',
        related_bill: '',
        operation: '',
      },
    ],
  };
}
function createOutputSetting() {
  return {
    outputSetting: [
      {
        id: 1,
        status: 70011,
        invoice_theme: '测试0530',
        taxpayer_identification_number: '123123',
        scope_application: '公寓测试门店',
        separate_numbers: '@integer(0,5)',
        invoices_remaining_number: '@integer(0,5)',
        invoice_account_settings: '已关联',
        enterpriseName: '@province()@city()发展有限公司',
        enterpriseTaxNumber:
          '914@integer(200,300)00@string("upper",2)@integer(0,9)@string("upper",5)@integer(0,9)@character("upper")',
        enterprisePhone:
          '@pick(["0710","0250","0533","0184","027","081","055"])-@integer(50000000,70000000)',
        enterpriseRegisteredAddress:
          '@province()@city()@county@cword(2,4)路@natural(1,1000)号软件新城1.1期@character("upper")@integer(0,9)（原@character("upper")@integer(0,9)栋）0@integer(0,9)号',
        authorizedBindingPerson: '@cname',
        bindingTime: '@datetime',
      },
      {
        id: 2,
        status: 70012,
        invoice_theme: '测试0531',
        taxpayer_identification_number: '123123',
        scope_application: '公寓测试门店',
        separate_numbers: '@integer(0,5)',
        invoices_remaining_number: '@integer(0,5)',
        invoice_account_settings: '未关联',
        enterpriseName: '@province()@city()发展有限公司',
        enterpriseTaxNumber:
          '914@integer(200,300)00@string("upper",2)@integer(0,9)@string("upper",5)@integer(0,9)@character("upper")',
        enterprisePhone:
          '@pick(["0710","0250","0533","0184","027","081","055"])-@integer(50000000,70000000)',
        enterpriseRegisteredAddress:
          '@province()@city()@county@cword(2,4)路@natural(1,1000)号软件新城1.1期@character("upper")@integer(0,9)（原@character("upper")@integer(0,9)栋）0@integer(0,9)号',
        authorizedBindingPerson: '@cname',
        bindingTime: '@datetime',
      },
    ],
  };
}
function createProductInformation() {
  return {
    productinformation: [
      {
        id: 1,
        status: '在用',
        cost_count: '预定定金',
        product_name: '预定定金',
        tax_classification_code: 'aaaa2435645646',
        commodity_tax_rate: '@integer(0,10)%',
      },
      {
        id: 2,
        status: '在用',
        cost_count: '房屋租金',
        product_name: '公寓楼租金',
        tax_classification_code: '3040502029902000000',
        commodity_tax_rate: '@integer(0,10)%',
      },
    ],
  };
}
// function createFinancialData() {
//   return [
//     {
//       // status: '开票中',
//       location: '东西湖新创基地(武汉市-江夏区-庙山)',
//       building: 'B1',
//       unit: 1,
//       rooms: [
//         {
//           floor: 1,
//           type: '8101-房型ML',
//           label: '',
//           price: 3000,
//           vacancyTime: null,
//           // rentTime: '2022.11.02~2023.11.01',
//           rentPeriod: {
//             start: '2022.11.02',
//             end: '2023.11.01',
//           },
//           status: [40002, 40003],
//         },
//       ],
//     },
//   ];
// }
export default [
  {
    url: '/basic-api/financialManagement',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        auditManagement: {
          ...createAuditList(),
        },
        invoiceList: {
          ...createInvoiceList(),
        },
        outputSetting: {
          ...createOutputSetting(),
        },
        outputdetail: {
          ...createOutputDefail(),
        },
        openingBank: {
          ...createOpeningBank(),
        },
        productinformation: {
          ...createProductInformation(),
        },
      });
    },
  },
] as MockMethod[];
