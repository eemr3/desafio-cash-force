'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`INSERT INTO
    orders (
        id,
        orderNfId,
        orderNumber,
        orderPath,
        orderFileName,
        orderOriginalName,
        emissionDate,
        pdfFile,
        emitedTo,
        nNf,
        CTE,
        value,
        createdAt,
        updatedAt,
        cnpjId,
        userId,
        buyerId,
        providerId,
        orderStatusBuyer,
        orderStatusProvider,
        deliveryReceipt,
        cargoPackingList,
        deliveryCtrc
    )
VALUES (
        1,
        '1605181324132',
        '18153',
        NULL,
        NULL,
        NULL,
        '2020-10-30T11:00:00-03:00',
        NULL,
        '22843980000127',
        '18153',
        '',
        '198450',
        '2020-10-30 17:54:18',
        '2020-10-30 17:54:18',
        1,
        1,
        1,
        1,
        '0',
        '0',
        NULL,
        NULL,
        NULL
    ), (
        2,
        '160518132413',
        '18157',
        NULL,
        NULL,
        NULL,
        '2020-11-04T15:32:35-02:00',
        NULL,
        '35705180000272',
        '18157',
        '',
        '168850',
        '2020-11-10 18:33:46',
        '2020-11-10 18:33:46',
        1,
        1,
        1,
        1,
        '0',
        '0',
        NULL,
        NULL,
        NULL
    ), (
        3,
        '1605181324130',
        '18184',
        NULL,
        NULL,
        NULL,
        '2020-11-10',
        NULL,
        '00418477002640',
        '18184',
        '',
        '222795',
        '2020-11-12 11:42:06',
        '2020-11-18 12:22:14',
        1,
        1,
        1,
        1,
        '7',
        '3',
        NULL,
        NULL,
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
