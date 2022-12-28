'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE
        orderportions (
        id int(11) NOT NULL,
        nDup varchar(255) NOT NULL,
        dVenc varchar(255) NOT NULL,
        vDup varchar(255) NOT NULL,
        availableToMarket tinyint(1) DEFAULT 1,
        createdAt datetime NOT NULL,
        updatedAt datetime NOT NULL,
        orderId int(11) DEFAULT NULL
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
