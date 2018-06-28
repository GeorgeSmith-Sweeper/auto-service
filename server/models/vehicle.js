module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Vehicle.associate = (models) => {
    // associations can be defined here
    Vehicle.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Vehicle;
};
