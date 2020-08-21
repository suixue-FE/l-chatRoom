'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // eslint-disable-next-line no-useless-constructor
  // constructor(ctx) {
  //   super(ctx);
  // }
  /**
   * @summary 创建用户
   * @description 创建用户 ，记录用户账户密码和类型
   * @router post /api/user
   * @request body createUserRequest
   * @response 200 baseResponse 创建成功
   */
  async getUsers() {
    const { ctx } = this;
    // console.log(ctx.params);
    // const userId = ctx.params.id;
    // // ctx.body = `user ${ctx.params.userId}`;\
    // console.log(userId);
    const userInfo = await ctx.service.user.find(3);
    ctx.body = userInfo;
  }
}

module.exports = UserController;
