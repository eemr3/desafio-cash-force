'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`INSERT INTO
    providers (
        id,
        name,
        tradingName,
        cashforceTax,
        responsibleName,
        responsibleEmail,
        responsiblePosition,
        responsiblePhone,
        responsibleMobile,
        website,
        postalCode,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        bank,
        bankAgency,
        account,
        documents,
        phoneNumber,
        situation,
        situationDate,
        createdAt,
        updatedAt,
        cnpjId,
        email
    )
VALUES (
        1,
        'CEDENTE 002',
        'CEDENTE 002 LTDA',
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        '2020-10-29 21:22:21',
        '2020-10-29 21:22:22',
        2,
        NULL
    );
    `);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
