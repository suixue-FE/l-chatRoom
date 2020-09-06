'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 群成员表
     */
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('group_user', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('group_user');
  },
};
