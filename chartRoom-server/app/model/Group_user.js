'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const GroupUser = app.model.define('group_user', {
    gu_id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gu_group_id:	{
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'g_id',
      },
    },
    gu_user_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    gu_user_rename:	STRING(64),
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  console.log('Group_user', GroupUser);
  return GroupUser;
};
