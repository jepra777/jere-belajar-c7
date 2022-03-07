// Jadi ini untuk nambah column gituu
// Sebelumnya gw untuk create file ini bisa pakai command:
// npx sequelize migration:create --name add-userid-to-userbiodata

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("UserBiodata", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Users",
          key: "id"
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("UserBiodata", "UserId", {})
  }
};
