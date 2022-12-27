'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE
       orders (
            id int(11) NOT NULL,
            orderNfId varchar(255) NOT NULL,
            orderNumber varchar(255) NOT NULL,
            orderPath varchar(255) DEFAULT NULL,
            orderFileName varchar(255) DEFAULT NULL,
            orderOriginalName varchar(255) DEFAULT NULL,
            emissionDate varchar(255) DEFAULT NULL,
            pdfFile varchar(255) DEFAULT NULL,
            emitedTo varchar(255) NOT NULL,
            nNf varchar(255) DEFAULT NULL,
            CTE varchar(255) DEFAULT NULL,
            value varchar(255) DEFAULT NULL,
            createdAt datetime NOT NULL,
            updatedAt datetime NOT NULL,
            cnpjId int(11) DEFAULT NULL,
            userId int(11) DEFAULT NULL,
            buyerId int(11) DEFAULT NULL,
            providerId int(11) DEFAULT NULL,
            orderStatusBuyer varchar(255) DEFAULT '0',
            orderStatusProvider varchar(255) DEFAULT '0',
            deliveryReceipt varchar(255) DEFAULT NULL,
            cargoPackingList varchar(255) DEFAULT NULL,
            deliveryCtrc varchar(255) DEFAULT NULL
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
