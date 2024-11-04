import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const test: AppRouteModule = {
  name: 'investment-management',
  path: '/investment-management',
  redirect: '/investment-management/index',
  component: LAYOUT,
  meta: {
    hideChildrenInMenu: true,
    title: '招商管理',
    icon: 'material-symbols:bedroom-child-outline-sharp',
    orderNo: 2,
  },
  children: [
    {
      name: 'investment-management-index',
      path: 'index',
      component: () => import('/@/views/investment-management/index.vue'),
      meta: {
        title: '招商管理',
      },
    },
  ],
};

export default test;
