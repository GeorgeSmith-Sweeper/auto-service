module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        name: 'users_username',
        msg: 'username not available',
      },
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
