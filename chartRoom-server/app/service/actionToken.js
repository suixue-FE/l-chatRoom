// token 生成
'use strict';
const Service = require('egg').Service;
class ActionTokenService extends Service {
  async getToken(id) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: { id }, // 用户id
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // 过期时间
    }, ctx.app.config.jwt.secret);
  }
}
module.exports = ActionTokenService;
