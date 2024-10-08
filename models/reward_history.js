const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const RewardHistory = sequelize.define(
    "RewardHistory",
    {
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      given_by: {
          type: DataTypes.INTEGER,
      },
      given_by_name: {
          type: DataTypes.STRING
      },
      given_to_name: {
          type: DataTypes.STRING
      },
      given_to: {
          type: DataTypes.INTEGER,
      },
      timestamp: {
        type: DataTypes.DATEONLY
      }
    },
    {
      timestamps: true,
      underscored: true, 
      tableName: "reward_history",
    }
  );
  RewardHistory.associate = (models) => {
    console.log(models, "=====models");
    RewardHistory.belongsTo(models.Users, {
      foreignKey: 'given_by',
      sourceKey: 'id'
    });
    RewardHistory.belongsTo(models.Users, {
      foreignKey: 'given_to',
      sourceKey: 'id'
    });
  };
  return RewardHistory;
};