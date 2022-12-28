'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO
        cnpjs (
            id,
            cnpj,
            companyType,
            createdAt,
            updatedAt
        )
    VALUES (
            1,
            '00000000000001',
            '2',
            '2020-10-29 21:20:33',
            '2020-10-29 21:20:33'
        ), (
            2,
            '00000000000002',
            '1',
            '2020-10-29 21:20:33',
            '2020-10-29 21:20:33'
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
