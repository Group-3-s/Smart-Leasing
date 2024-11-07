import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const financial: AppRouteModule = {
  path: '/financialManagement',
  name: 'FinancialManagement',
  component: LAYOUT,
  redirect: '/financialManagement/InvoiceService',
  meta: {
    orderNo: 7,
    icon: 'mingcute:pig-money-line',
    title: '财务管理',
  },
  children: [
    {
      path: 'InvoiceService',
      name: 'InvoiceService',
      component: () => import('/@/views/financialManagement/InvoiceService/index.vue'),
      meta: {
        title: '发票服务',
      },
    },
    {
      path: 'BillManagement',
      name: 'BillManagement',
      component: () => import('/@/views/financialManagement/BillManagement/index.vue'),
      meta: {
        title: '账单管理',
      },
    },
    {
      path: 'PaymentReceipt',
      name: 'PaymentReceipt',
      component: () => import('/@/views/financialManagement/PaymentReceipt/index.vue'),
      meta: {
        title: '收付流水',
      },
    },
    {
      path: 'TenantTransferNotice',
      name: 'TenantTransferNotice',
      component: () => import('/@/views/financialManagement/TenantTransferNotice/index.vue'),
      meta: {
        title: '租客转账通知',
      },
    },
  ],
};

export default financial;
