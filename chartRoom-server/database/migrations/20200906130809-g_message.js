'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 群消息表
     */
    const { INTEGER, DATE, TEXT } = Sequelize;
    await queryInterface.createTable('g_message', {
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
      gm_creat_time:	{ type: DATE, defaultValue: Sequelize.NOW },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('g_message');
  },
};
