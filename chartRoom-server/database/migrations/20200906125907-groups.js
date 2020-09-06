'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('groups', {
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
      creat_time:	{ type: DATE, defaultValue: Sequelize.NOW },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('groups');
  },
};
