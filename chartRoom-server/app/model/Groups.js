'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Groups = app.model.define('groups', {
    g_id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    g_name: STRING(64),
    g_notice:	STRING(255),
    g_creat_id:	{
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    creat_time:	{ type: DATE, defaultValue: NOW },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  Groups.associate = function() {
    // 多对多
    // app.model.Groups.belongsToMany(app.model.Users, {
    //   through: app.model.Group_user,
    //   foreignKey: 'gu_group_id',
    //   otherKey: 'gu_user_id',
    // });
  };
  console.log('groups', Groups);
  return Groups;
};
