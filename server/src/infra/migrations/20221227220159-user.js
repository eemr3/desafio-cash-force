'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE
        users (
            id int(11) NOT NULL,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            phoneNumber varchar(255) DEFAULT NULL,
            mobile varchar(255) DEFAULT NULL,
            departament varchar(255) DEFAULT NULL,
            verificationCode varchar(255) DEFAULT NULL,
            emailChecked tinyint(1) DEFAULT 0,
            createdAt datetime NOT NULL,
            updatedAt datetime NOT NULL,
            cashforceAdm tinyint(1) DEFAULT 0
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
