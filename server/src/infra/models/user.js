'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       phoneNumber: DataTypes.STRING,
//       mobile: DataTypes.STRING,
//       departament: DataTypes.STRING,
//       verificationCode: DataTypes.STRING,
//       emailChecked: DataTypes.BOOLEAN,
//       cashforceAdm: DataTypes.BOOLEAN,
//     },
//     {
//       sequelize,
//       modelName: 'users',
//     },
//   );
//   return User;
// };

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.BOOLEAN,
      cashforceAdm: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: 'users',
    },
  );

  return User;
};
