'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`INSERT INTO
      buyers   (
          id  ,
          name  ,
          tradingName ,
          cashforceTax  ,
          responsibleName ,
          responsibleEmail  ,
          responsiblePosition ,
          responsiblePhone  ,
          responsibleMobile ,
          website ,
          postalCode  ,
          address ,
          number  ,
          complement  ,
          neighborhood  ,
          city  ,
          state ,
          phoneNumber ,
          situation ,
          situationDate ,
          createdAt ,
          updatedAt ,
          cnpjId  ,
          confirm ,
          email 
    )
    VALUES (
            1,
            'SACADO 001',
            'SACADO 001 LTDA',
            '0',
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
            '2020-10-29 21:20:33',
            '2020-10-29 21:20:34',
            1,
            1,
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
