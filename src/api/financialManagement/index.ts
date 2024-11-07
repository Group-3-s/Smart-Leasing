import { defHttp } from '/@/utils/http/axios';

export function getFinancialData() {
  return defHttp.get({ url: '/financialManagement' });
}

// import { apiHttp } from '/@/utils/http/axios';
// import { invoiceListParams, invoiceListResult } from './model/investmentManagementModel';

// enum Api {
//   invoiceList = '/financialmanagement/invoice/list',
// }

// export function invoiceListApi(params: invoiceListParams) {
//   return apiHttp.get<invoiceListResult[]>({
//     url: Api.invoiceList,
//     params,
//   });
// }
