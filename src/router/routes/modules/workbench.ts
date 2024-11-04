import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const workbench: AppRouteModule = {
  path: '/workbench',
  name: 'workbench',
  component: LAYOUT,
  redirect: '/workbench/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'icon-park-outline:workbench',
    title: '工作台',
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'workbenchPage',
      component: () => import('/@/views/workbench/index.vue'),
      meta: {
        title: '工作台',
        icon: 'icon-park-outline:workbench',
        hideMenu: true,
      },
    },
  ],
};

export default workbench;
