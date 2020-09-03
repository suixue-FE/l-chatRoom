'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Friend = app.model.define('user_friend', {
    id: {
      type: STRING,
      primaryKey: true },
    user_id: { type: INTEGER, allowNull: false },
    friend_id: { type: INTEGER, allowNull: false },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  console.log('Friend', Friend);
  return Friend;
};
