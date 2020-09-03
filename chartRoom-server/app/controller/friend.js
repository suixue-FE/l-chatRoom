'use strict';
const Controller = require('egg').Controller;
/**
 * @Controller 好友管理
 */
class FriendsController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  /**
   * @summary 添加好友
   * @description 用户添加好友
   * @router get /api/addFriends
   * @request query string userId 用户id
   * @request query string friendId 添加的好友id
   * @response 200 baseResponse 请求成功
   */
  async AddFriends() {
    const { ctx } = this;
    const res = await ctx.service.friend.AddFriends(ctx.query.userId, ctx.query.friendId);
    ctx.helper.success({ ctx, res, msg: '添加成功' });
  }
  /**
   * @summary 获取用户好友列表
   * @description 获取用户好友列表
   * @router get /api/getFriends
   * @request query string userId  用户id
   * @response 200 baseResponse 请求成功
   */
  async getFriends() {
    const { ctx } = this;
    const res = await ctx.service.friend.getFriends(ctx.query.userId);
    ctx.helper.success({ ctx, res });
  }
}

module.exports = FriendsController;