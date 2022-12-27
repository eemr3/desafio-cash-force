'use strict';
const OFFER_FLOAT = `float`;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE
    offers (
    id int(11) NOT NULL,
    tax varchar(255) NOT NULL,
    tariff varchar(255) NOT NULL,
    adValorem varchar(255) NOT NULL,
    offer_float varchar(255) NOT NULL,
    iof varchar(255) NOT NULL,
    expiresIn datetime NOT NULL,
    paymentStatusSponsor tinyint(1) DEFAULT 0,
    paymentStatusProvider tinyint(1) DEFAULT 0,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    orderId int(11) DEFAULT NULL,
    sponsorId int(11) DEFAULT NULL
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
