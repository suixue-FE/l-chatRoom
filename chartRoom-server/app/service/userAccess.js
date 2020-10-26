'use strict';
const Service = require('egg').Service;
class UserAccessService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    console.log(payload.account);
    const user = await service.user.findByAccount(payload.account);
    console.log(user);
    if (!user) ctx.throw(404, '当前用户不存在');
    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw)ctx.throw(404, '用户名或密码错误');
    return { token: await service.actionToken.getToken(user.id) };
    // return dataValues;
  }

  async current() {
    const { ctx, service } = this;
    // ctx.state.user 可以提取到JWT编码的data
    const id = ctx.state.user.data.id;
    const user = await service.user.find(id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    user.password = 'How old are you?';
    return user;
  }
}
module.exports = UserAccessService;
