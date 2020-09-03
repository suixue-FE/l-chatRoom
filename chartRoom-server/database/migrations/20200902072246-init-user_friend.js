'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('user_friend', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user_friend');
  },
};
