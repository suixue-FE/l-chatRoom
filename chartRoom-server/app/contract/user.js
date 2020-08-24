'use strict';
module.exports = {
  // 用户注册
  registerUserRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '手机号',
      example: '18801731528',
      format: /^1[34578]\d{9}$/,
    },
    password: { type: 'string', required: true, description: '密码', example: '111111' },
    realName: { type: 'string', required: true, description: '姓名', example: 'Tom' },
  },
};
