/* eslint-disable no-useless-constructor */
'use strict';
const Controller = require('egg').Controller;
/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
  * @summary 注册用户
  * @description 创建用户 ，记录用户账户密码和类型
  * @router post /api/user/regist
  * @request body registerUserRequest
  * @response 200 baseResponse 创建成功
  */
  async registerUser() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.registerUserRequest);
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.registerUser(payload);
    // const res = {};
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }
  /**
   * @summary 注销用户
   * @description 注销用户
   * @router post /api/api/del
   * @request body delUserRequest
   * @response 200 baseResponse 注销成功
   */
  async delUser() {
    const { ctx } = this;
    // 校验参数
    this.ctx.validate(this.ctx.rule.delUserRequest);
    const payload = ctx.request.body || {};
    const res = await this.service.user.delUser(payload);
    ctx.helper.success({ ctx, res });
  }
  /**
   * @summary 获取单个用户
   * @description 获取用户信息
   * @router get /api/user
   * @request query string id  用户id
   * @response 200 baseResponse 创建成功
   */
  async getUsers() {
    const { ctx } = this;
    const res = await ctx.service.user.find(ctx.query.id);
    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
