'use strict';

module.exports = function (sequelize, DataTypes) {
  const Buyer = sequelize.define(
    'Buyer',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cashforceTax: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      responsibleName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      responsibleEmail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      responsiblePosition: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      responsiblePhone: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      responsibleMobile: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      number: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      complement: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      neighborhood: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      situation: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      situationDate: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'buyers',
      timestamps: true,
    },
  );

  Buyer.associate = (models) => {
    Buyer.hasMany(models.Order, {
      foreignKey: 'buyerId',
      as: 'orders',
    });
  };

  return Buyer;
};
