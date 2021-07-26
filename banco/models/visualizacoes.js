'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visualizacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      visualizacoes.belongsTo(models.filmes, {
        foreignKey: 'filmes_id'
      })
      visualizacoes.belongsTo(models.espectadores, {
        foreignKey: 'espectadores_id'
      })
    }
  };
  visualizacoes.init({
   
  }, {
    sequelize,
    modelName: 'visualizacoes',
  });
  return visualizacoes;
};