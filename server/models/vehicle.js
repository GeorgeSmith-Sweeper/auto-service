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
    Vehicle.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE', // deleting a user will delete a their vehicals
    });
  };
  return Vehicle;
};
