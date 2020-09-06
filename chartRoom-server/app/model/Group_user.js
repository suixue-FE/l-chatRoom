'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Group_user = app.model.define('group_user', {
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
  console.log('Group_user', Group_user);
  return Group_user;
};
