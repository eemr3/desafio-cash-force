'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE
    buyers (
        id int(11) NOT NULL,
        name varchar(255) NOT NULL,
        tradingName varchar(255) DEFAULT NULL,
        cashforceTax varchar(255) DEFAULT NULL,
        responsibleName varchar(255) DEFAULT NULL,
        responsibleEmail varchar(255) DEFAULT NULL,
        responsiblePosition varchar(255) DEFAULT NULL,
        responsiblePhone varchar(255) DEFAULT NULL,
        responsibleMobile varchar(255) DEFAULT NULL,
        website varchar(255) DEFAULT NULL,
        postalCode varchar(255) DEFAULT NULL,
        address varchar(255) DEFAULT NULL,
        number varchar(255) DEFAULT NULL,
        complement varchar(255) DEFAULT NULL,
        neighborhood varchar(255) DEFAULT NULL,
        city varchar(255) DEFAULT NULL,
        state varchar(255) DEFAULT NULL,
        phoneNumber varchar(255) DEFAULT NULL,
        situation varchar(255) DEFAULT NULL,
        situationDate varchar(255) DEFAULT NULL,
        createdAt datetime NOT NULL,
        updatedAt datetime NOT NULL,
        cnpjId int(11) DEFAULT NULL,
        confirm tinyint(1) DEFAULT 1,
        email varchar(255) DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;        
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
