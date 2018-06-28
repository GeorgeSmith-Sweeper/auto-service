module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
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
