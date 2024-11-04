import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
// import { Faker, zh_CN } from '@faker-js/faker';

// const faker = new Faker({
//   locale: [zh_CN],
// });

// function createAuditList() {
//   return {
//     auditManagement: {
//       pendingApproval: '@integer(1,100)',
//       initiatedByMe: '@integer(1,100)',
//       copyMe: '@integer(1,100)',
//       avatar: faker.image.url,
//     },
//   };
// }

// 常用功能图标
function createFeatureList() {
  return {
    featureList: [
      {
        id: 1,
        name: '招商管理',
        desc: '潜在客户',
        icon: 'streamline:information-desk-customer',
        path: '/investment-management',
      },
      { id: 2, name: '资产管理', desc: '各类资产', icon: 'hugeicons:gold', path: '' },
      { id: 3, name: '合约管理', desc: '约定/租客', icon: 'mdi:contract', path: '' },
      {
        id: 4,
        name: '财务管理',
        desc: '账单/明细/流水',
        icon: 'icon-park-outline:finance',
        path: '',
      },
      { id: 5, name: '营销推广', desc: '营销/推广', icon: 'nimbus:marketing', path: '' },
      {
        id: 6,
        name: '审批管理',
        desc: '合同/财务审批',
        icon: 'material-symbols:approval',
        path: '',
      },
      { id: 7, name: '物资管理', desc: '物质/仓储管理', icon: 'mdi:folder-key-outline', path: '' },
      {
        id: 8,
        name: '数据分析',
        desc: '用户画像/数据统计',
        icon: 'material-symbols:data-thresholding-outline',
        path: '',
      },
      {
        id: 9,
        name: '租后管理',
        desc: '换房/退房申请',
        icon: 'material-symbols:manage-history',
        path: '',
      },
      {
        id: 10,
        name: '智能设备',
        desc: '智能门锁',
        icon: 'material-symbols:smart-toy-outline-sharp',
        path: '',
      },
      { id: 11, name: '巡防管理', desc: '巡防检查', icon: 'gravity-ui:shield-check', path: '' },
      { id: 12, name: '业绩管理', desc: '员工业绩', icon: 'mingcute:performance-line', path: '' },
    ],
  };
}

// 审批管理
function createauditManagement() {
  return {
    ContractManagement: {
      pendingApproval: '@integer(1,10)', //待我审批
      initiatedByMe: '@integer(1,10)', //我发起的
      copyMe: '@integer(1,10)', //抄送我的
    },
  };
}

//合约管理
function createContractManagement() {
  return {
    ContractManagement: {
      TenantContract: '@integer(100,1000)', //租客合同
      checked: '@integer(10,100)', //待签字
      InRent: '@integer(10,100)', //在租中
      MovingOutSoon: '@integer(10,100)', //即将搬出
      Expired: '@integer(10,100)', //已到期
    },
  };
}

// 租前
function createPreRental() {
  return {
    PreRental: {
      Tobecheckedin: '@integer(1,10)', //待入住
      BookToday: '@integer(1,10)', //今日预定
      ScheduledForThisWeek: '@integer(1,10)', //本周预定
      ScheduledForThisMonth: '@integer(1,10)', //本月预定
    },
  };
}

// 房源管理
function createListingManagement() {
  return {
    ListingManagement: {
      Management: '@integer(1000,2000)',
      OccupancyRate: '@integer(30.05,40.05)', //出租率
      vacant: '@integer(100,600)', // 空置
      disposition: '@integer(100,600)', // 配置
      Rented: '@integer(1,10)', //已租
      MovingInSoon: '@integer(100,200)', //即将搬入
      ExpirationIsComing: '@integer(100,200)', //即将到期
      Expired: '@integer(10,20)', //已到期
    },
  };
}

export default [
  {
    url: '/basic-api/workbench',
    timeout: 200,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        // 审核管理
        auditManagement: {
          ...createauditManagement(),
        }, //合约管理
        ContractManagement: {
          ...createContractManagement(),
        }, //租前
        PreRental: {
          ...createPreRental(),
        }, //房源管理
        ListingManagement: {
          ...createListingManagement(),
        }, //常用功能图标
        featureList: {
          ...createFeatureList(),
        },
      }); //存在异常 // return resultError(“出现问题”);
    },
  }, // mock user login
] as MockMethod[];
