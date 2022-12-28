'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE
    cnpjs (
    id int(11) NOT NULL,
    cnpj varchar(255) NOT NULL,
    companyType varchar(255) NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;
  `);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
