module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: 'users_email',
        msg: 'A user with this email already exists',
      },
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
