/* eslint-disable no-useless-constructor */
'use strict';
const Controller = require('egg').Controller;
/**
 * @Controller 用户鉴权
 */
class UserController extends Controller {
  /**
   * @summary 用户登录
   * @description 用户登录，成功返回token
   * @router post /bfApi/jwt/login
   * @request body delUserRequest
   * @response 200 baseResponse 创建成功
   */
  async userLogin() {
    const { service, ctx } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    // console.log(service);
    const res = await service.userAccess.login(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
