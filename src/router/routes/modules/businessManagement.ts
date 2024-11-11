import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/businessManagement',
  name: 'businessManagement',
  component: LAYOUT,
  redirect: '/businessManagement/user',
  meta: {
    orderNo: 5,
    icon: 'material-symbols:enterprise-outline',
    title: '企业设置',
  },
  children: [
    {
      path: 'user',
      name: 'usermanagement',
      component: LAYOUT,
      redirect: '/user/department',
      meta: {
        // affix: true,
        title: '用户管理',
      },
      children: [
        {
          path: 'department',
          name: 'department',
          component: () =>
            import('/@/views/businessManagement/usermanagement/department/index.vue'),
          meta: {
            title: '部门员工',
          },
        },
        {
          path: 'rolemanagement',
          name: 'rolemanagement',
          component: () =>
            import('/@/views/businessManagement/usermanagement/rolemanagement/index.vue'),
          meta: {
            title: '角色权限',
          },
        },
      ],
    },
    {
      path: 'configuration',
      name: 'configurationcenter',
      component: LAYOUT,
      redirect: '/configuration/dictionary',
      meta: {
        title: '配置中心',
      },
      children: [
        {
          path: 'dictionary',
          name: 'dictionary',
          component: () =>
            import('/@/views/businessManagement/configurationcenter/dictionaryconfig/index.vue'),
          meta: {
            title: '字典配置',
          },
        },
        {
          path: 'product',
          name: 'product',
          component: () =>
            import('/@/views/businessManagement/configurationcenter/productconfig/index.vue'),
          meta: {
            title: '产品配置',
          },
        },
        {
          path: 'operation',
          name: 'operation',
          component: () =>
            import('/@/views/businessManagement/configurationcenter/operationconfig/index.vue'),
          meta: {
            title: '运营配置',
          },
        },
        {
          path: 'collection',
          name: 'collection',
          component: () =>
            import('/@/views/businessManagement/configurationcenter/collectionconfig/index.vue'),
          meta: {
            title: '收款账号配置',
          },
        },
      ],
    },
  ],
};

export default dashboard;
