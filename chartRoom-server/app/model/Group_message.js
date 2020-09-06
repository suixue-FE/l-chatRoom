'use strict';

module.exports = app => {
  const { INTEGER, TEXT, DATE, NOW } = app.Sequelize;

  const Group_message = app.model.define('g_message', {
    gm_id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gm_group_id:	{
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'g_id',
      },
    },
    gm_user_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    gm_message: TEXT,
    gm_creat_time:	{ type: DATE, defaultValue: NOW },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  console.log('Group_message', Group_message);
  return Group_message;
};
