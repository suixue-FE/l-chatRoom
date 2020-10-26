// eslint-disable-next-line strict
const Service = require('egg').Service;
class UserService extends Service {
  // 默认不需要提供构造函数。
  // eslint-disable-next-line no-useless-constructor
  constructor(ctx) {
    super(ctx);
    // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    // 就可以直接通过 this.ctx 获取 ctx 了
    // 还可以直接通过 this.app 获取 app 了
  }
  async registerUser(payload) {
    // 给密码加密
    payload.password = await this.ctx.genHash(payload.password);
    // 用手机号注册就把手机号当做账号
    if (payload.mobile) {
      payload.account = payload.mobile;
    }
    return this.ctx.model.Users.create(payload);
  }
  async delUser(payload) {
    const data = await this.ctx.model.Users.destroy({
      where: { account: payload.account },
    });
    return data;
  }
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const dataValues = await this.ctx.model.Users.findByPk(uid, {
      attributes: [ 'name', 'id', 'mobile', 'last_login', 'email', 'url', 'creat_time' ],
    });
    return dataValues;
  }
  async findByMobile(mobile) {
    // 通过手机号查找
    const dataValues = await this.ctx.model.Users.findOne({
      where: { mobile },
      attributes: [ 'name', 'id', 'mobile', 'last_login', 'email', 'url', 'creat_time' ],
    });
    return dataValues;
  }
  // async getPicture(uid) {
  //   const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
  //   return result.data;
  // }
}
module.exports = UserService;
