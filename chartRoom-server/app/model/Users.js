'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Users = app.model.define('users', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true },
    name: STRING(64),
    account:	{ type: STRING(64), primaryKey: true, unique: true },
    mobile:	{ type: STRING(64), unique: true },
    password:	STRING(64),
    login_count:	INTEGER,
    last_login:	STRING(64),
    email:	{ type: STRING(64), unique: true },
    url:	STRING(255),
    creat_time:	{ type: DATE, defaultValue: NOW },
  }, {
    initialAutoIncrement: 10000,
    freezeTableName: true, // 对应的表名将与model名相同
    timestamps: false,
  });
  console.log('model', app.model);

  console.log('users_g', app.model.Groups);
  Users.associate = function() {
    // One-To-One associations
    // app.model.User.hasOne(app.model.UserInfo);

    // One-To-Many associations
    app.model.Users.hasMany(app.model.Friend, {
      foreignKey: 'user_id',
    });
    // app.model.Users.belongsToMany(app.model.Groups, {
    //   through: app.model.Group_user,
    //   foreignKey: 'gu_user_id',
    //   otherKey: 'gu_group_id',
    // });
  };
  return Users;
};
