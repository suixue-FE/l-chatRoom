// eslint-disable-next-line strict
const Service = require('egg').Service;
class FriendService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  /**
   *
   * @param {*} userId
   * @param friendId
   */
  async AddFriends(userId, friendId) {
    const { ctx } = this;
    if (!userId) ctx.throw(422, 'userId is undefind');
    if (!friendId) ctx.throw(422, 'friendId is undefind');
    const user = await ctx.model.Users.findByPk(userId);
    const friend = await ctx.model.Users.findByPk(friendId);
    if (user && friend) {
      return this.ctx.model.Friend.create({ user_id: userId, friend_id: friendId, id: `${userId}${friendId}`, friend_rename: friend.name });
    }
    ctx.throw(404, '当前用户不存在');
  }
  /**
   * 获取好友列表
   * @param {*} userId 用户id
   */
  async getFriends(payload) {
    const { currentPage = 10, pageSize = 1, isPaging, userId } = payload;
    const { Users, Friend } = this.ctx.model;
    if (isPaging) {
      return await this.ctx.helper.findByPage(Users, pageSize, currentPage, {
        where: { id: userId },
        include: [{ model: Friend }],
      });
    } return await Users.findAndCountAll({
      distinct: true,
      where: { id: userId },
      include: [{ model: Friend }],
    });
  }
}
module.exports = FriendService;
