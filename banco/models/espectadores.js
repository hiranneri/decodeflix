'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class espectadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      espectadores.hasMany(models.visualizacoes, {
        foreignKey: 'espectadores_id'
      })
     
    }
  };
  espectadores.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'espectadores',
  });
  return espectadores;
};