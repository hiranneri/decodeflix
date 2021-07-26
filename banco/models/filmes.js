'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class filmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      filmes.hasMany(models.visualizacoes,{
        foreignKey: 'filmes_id'
      })
      
    }
  };
  filmes.init({
    nome: DataTypes.STRING,
    genero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'filmes',
  });
  return filmes;
};