'use strict';
const Service = require('egg').Service;
class UserAccessService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    const user = await service.user.findByMobile(payload.mobile);
    if (user) ctx.throw(404, '当前用户不存在');
    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw)ctx.throw(404, '用户名或密码错误');
    return { token: await service.getToken(user.id) };
    // return dataValues;
  }
}
module.exports = UserAccessService;
