const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Cnpj = sequelize.define(
    'Cnpj',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cnpj: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'cnpj',
      },
      companyType: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'cnpjs',
      timestamps: true,
    },
  );

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, {
      foreignKey: 'cnpjId',
      as: 'orders',
    });
  };

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Provider, {
      foreignKey: 'cnpjId',
      as: 'providers',
    });
  };

  return Cnpj;
};
