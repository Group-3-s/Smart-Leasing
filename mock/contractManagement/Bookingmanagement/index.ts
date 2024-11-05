import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../../_util';

function clientList() {
  return {
    result: [
      {
        id: 1,
        status: '3',
        person: '夏18160660167',
        Availability: '海外 海外 -',
        type: '3',
        createTime: '1978-03-31',
        Duration: '6年',
        price: '119',
        serial: '17307103432013',
      },
      {
        id: 2,
        status: '4',
        person: '史18147674735',
        Availability: '福建省 福州市 平潭县',
        type: '1',
        createTime: '1982-06-18',
        Duration: '6年',
        price: '205',
        serial: '17307103432114',
      },
      {
        id: 3,
        status: '4',
        person: '罗18168357270',
        Availability: '广西壮族自治区 来宾市 忻城县',
        type: '3',
        createTime: '1999-08-11',
        Duration: '10年',
        price: '239',
        serial: '17307103432215',
      },
      {
        id: 4,
        status: '3',
        person: '阎18175553312',
        Availability: '重庆 重庆市 长寿区',
        type: '3',
        createTime: '2002-09-24',
        Duration: '3年',
        price: '189',
        serial: '17307103432316',
      },
      {
        id: 5,
        status: '4',
        person: '赵18162358107',
        Availability: '河北省 秦皇岛市 抚宁县',
        type: '3',
        createTime: '2007-03-02',
        Duration: '8年',
        price: '363',
        serial: '17307103672417',
      },
      {
        id: 6,
        status: '3',
        person: '陆18641162405',
        Availability: '河北省 保定市 雄县',
        type: '1',
        createTime: '2008-04-03',
        Duration: '8年',
        price: '202',
        serial: '17307103672518',
      },
      {
        id: 7,
        status: '0',
        person: '苏18195376733',
        Availability: '海南省 三亚市 -',
        type: '1',
        createTime: '1977-05-16',
        Duration: '10年',
        price: '255',
        serial: '17307103672619',
      },
      {
        id: 8,
        status: '5',
        person: '易18126245774',
        Availability: '广东省 惠州市 博罗县',
        type: '1',
        createTime: '2010-06-14',
        Duration: '9年',
        price: '364',
        serial: '17307103672720',
      },
      {
        id: 9,
        status: '2',
        person: '于18186594757',
        Availability: '吉林省 白城市 通榆县',
        type: '2',
        createTime: '1993-10-03',
        Duration: '6年',
        price: '135',
        serial: '17307103672821',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/contractManagement/Bookingmanagement',
    timeout: 200,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        ...clientList(),
      }); //存在异常 // return resultError(“出现问题”);
    },
  }, // mock user login
] as MockMethod[];
