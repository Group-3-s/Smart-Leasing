export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
      key: '',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: '',
    },
    {
      title: '员工编号',
      dataIndex: 'employeeID',
      key: '',
    },
    {
      title: '员工姓名',
      dataIndex: 'employeeName',
      key: '',
    },
    {
      title: '员工电话(登录账号)',
      dataIndex: 'phone',
      key: '',
    },
    {
      title: '工龄',
      dataIndex: 'age',
      key: '',
    },
    {
      title: '邮箱',
      dataIndex: 'mailbox',
      key: '',
    },
    {
      title: '部门',
      dataIndex: 'branch',
      key: '',
    },
    {
      title: '部门角色',
      dataIndex: 'departmentalrole',
      key: '',
      slots: { customRender: 'departmentalrole' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: '',
      slots: { customRender: 'operation' },
    },
  ],
};
