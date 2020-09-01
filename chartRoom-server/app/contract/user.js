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
    realName: { type: 'string', required: true, description: '姓名/昵称', example: 'Tom' },
    // creat_time: { type: 'string', required: false, description: '注册时间', example: ctx.helper.formatTime() },
  },
  delUserRequest: {
    account: { type: 'string', required: true, description: '账号', example: '18801731528' },
    password: { type: 'string', required: true, description: '密码', example: '111111' },
  },
};
