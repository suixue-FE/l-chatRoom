'use strict';

module.exports = app => {
  const { INTEGER, TEXT, DATE, NOW } = app.Sequelize;

  const FriendMessage = app.model.define('f_message', {
    fm_id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fm_from_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      } },
    fm_to_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    fm_messages: {
      type: TEXT,
    },
    fm_creat_time:	{ type: DATE, defaultValue: NOW },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  console.log('FriendMessage', FriendMessage);
  return FriendMessage;
};
