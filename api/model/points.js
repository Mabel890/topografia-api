module.exports = (sequelize, Sequelize) => {
  return sequelize.define("points", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    station: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    right_horizontal_angle: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    azimuth: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    horizontal_distance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    inclined_distance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    vertical_angle: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    prism_height: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    instrumental_height: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    vertical_distance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_topographic_booklet: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};
