import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const performanceManagement: AppRouteModule = {
  path: '/multiple',
  name: 'Multiple',
  component: LAYOUT,
  // redirect: '/dashboard/analysis',
  meta: {
    orderNo: 5,
    icon: 'ion:grid-outline',
    title: '业绩管理',
  },
  children: [
    {
      path: 'PerformanceAccounting',
      name: 'PerformanceAccounting',
      component: () => import('/@/views/performanceManagement/PerformanceAccounting/index.vue'),
      meta: {
        // affix: true,
        title: '业绩台账',
      },
    },
    {
      path: 'CommissionConfiguration',
      name: 'CommissionConfiguration',
      component: () => import('/@/views/performanceManagement/CommissionConfiguration/index.vue'),
      meta: {
        title: '分佣配置',
      },
    },
    {
      path: 'PerformanceReview',
      name: 'PerformanceReview',
      component: () => import('/@/views/performanceManagement/PerformanceReview/index.vue'),
      meta: {
        title: '业绩审批',
      },
    },
  ],
};

export default performanceManagement;
