const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Provider = sequelize.define(
    'Provider',
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
      bank: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      bankAgency: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      account: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      documents: {
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
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'providers',
      timestamps: true,
    },
  );

  Provider.associate = (models) => {
    Provider.hasMany(models.Order, {
      foreignKey: 'providerId',
      as: 'orders',
    });
  };

  Provider.associate = (models) => {
    Provider.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpjs',
    });
  };

  return Provider;
};
