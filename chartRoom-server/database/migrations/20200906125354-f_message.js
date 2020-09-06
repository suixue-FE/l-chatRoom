'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, TEXT, DATE, NOW } = Sequelize;
    await queryInterface.createTable('f_message', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('f_message');
  },
};
