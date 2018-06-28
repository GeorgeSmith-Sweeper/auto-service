module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Vehicle, {
      foreignKey: 'vehicalId',
      as: 'vehicals',
    });
  };
  return User;
};
