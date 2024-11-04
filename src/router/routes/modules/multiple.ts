import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/multiple',
  name: 'multiple',
  component: LAYOUT,
  redirect: '/multiple/foo',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '多页面组件',
  },
  children: [
    {
      path: 'foo',
      name: 'foo',
      component: () => import('/@/views/multiple/foo/index.vue'),
      meta: {
        // affix: true,
        title: 'foo页面',
      },
    },
    {
      path: 'zoo',
      name: 'zoo',
      component: () => import('/@/views/multiple/zoo/index.vue'),
      meta: {
        title: 'zoo页面',
      },
    },
  ],
};

export default dashboard;
