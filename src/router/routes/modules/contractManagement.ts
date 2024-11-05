import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const contractManagement: AppRouteModule = {
  path: '/contractManagement ',
  name: 'contractManagement ',
  component: LAYOUT,
  redirect: '/contractManagement/foo',
  meta: {
    orderNo: 4,
    icon: 'material-symbols:contract-outline',
    title: '合约管理',
  },
  children: [
    {
      path: 'Bookingmanagement',
      name: 'Bookingmanagement',
      component: () => import('/@/views/contractManagement/Bookingmanagement/index.vue'),
      meta: {
        // affix: true,
        title: '预定管理',
      },
    },
    {
      path: 'TenantContract',
      name: 'TenantContract',
      component: () => import('/@/views/contractManagement/TenantContract/index.vue'),
      meta: {
        title: '租客合同',
      },
    },
  ],
};

export default contractManagement;
