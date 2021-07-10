module.exports = (sequelize, Sequelize) => {
  return sequelize.define("type_of_topographic_survey", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
