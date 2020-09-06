'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Friend = app.model.define('user_friend', {
    id: {
      type: STRING,
      primaryKey: true },
    user_id: { type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      } },
    friend_id: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      } },
    friend_rename: {
      type: STRING,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  console.log('Friend', Friend);
  return Friend;
};
