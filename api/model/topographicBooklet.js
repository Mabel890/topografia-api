module.exports = (sequelize, Sequelize) => {
  return sequelize.define("topographic_booklet", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    area: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    north_and_south_projection: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    east_and_west_projection: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    north_coordinate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    east_coordinate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_type_of_topographic_survey: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};
