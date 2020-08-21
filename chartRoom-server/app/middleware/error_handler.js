/* eslint-disable no-unused-vars */
'use strict';
module.exports = (options, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 触发error事件
      app.emit('error', err, this);
      const status = err.status || 500;
      // 500 服务器端错误
      // ⽣产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && app.config.env === 'prod' ?
        'Internal Server Error' : err.message;
      // 从error中读取属性，设置到响应中
      ctx.body = {
        code: status,
        error,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = 200;
    }
  };
};
