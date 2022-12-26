const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      orderNfId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'orderNfId',
      },
      orderNumber: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      orderPath: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: 'orderPath',
      },
      orderFileName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: 'orderFileName',
      },
      orderOriginalName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: 'orderOriginalName',
      },
      emissionDate: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pdfFile: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      emitedTo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      nNf: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      CTE: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      value: {
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cargoPackingList: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      deliveryCtrc: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'orders',
      timestamps: true,
    },
  );

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
    });

    Order.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpjs',
    });

    Order.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'providers',
    });

    Order.belongsTo(models.Buyer, {
      foreignKey: 'buyerId',
      as: 'buyers',
    });
  };
  return Order;
};
