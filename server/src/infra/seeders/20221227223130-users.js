'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`INSERT INTO
      users  (
          id  ,
          name  ,
          email ,
          phoneNumber ,
          mobile  ,
          departament ,
          verificationCode  ,
          emailChecked  ,
          createdAt ,
          updatedAt ,
          cashforceAdm  
    )
    VALUES (
            1,
            'ALLAN SOUZA',
            'allan@cashforce.com.br',
            NULL,
            NULL,
            NULL,
            '',
            1,
            '2020-10-01 21:31:37',
            '2020-10-01 22:41:23',
            1
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
