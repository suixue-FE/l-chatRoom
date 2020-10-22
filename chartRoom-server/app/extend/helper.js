'use strict';
const moment = require('moment');

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

// 处理分页查询
exports.findByPage = (model, pageSize, currentPage, findObj) => {
  return model.findAndCountAll(Object.assign(findObj, {
    limit: Number(pageSize),
    offset: Number((currentPage - 1) * pageSize),
    distinct: true,
  }));
};
