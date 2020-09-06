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
  console.log('users', Groups);
  return Groups;
};
