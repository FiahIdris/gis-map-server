'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsTo(models.User)
    }
  };
  Location.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `label harus diisi`
        },
        notEmpty: {
          msg: `label harus diisi`
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `nama kota/kab harus diisi`
        },
        notEmpty: {
          msg: `nama kota/kab harus diisi`
        }
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `nama profinsi harus diisi`
        },
        notEmpty: {
          msg: `nama profinsi harus diisi`
        }
      }
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: `latitude harus diisi`
        },
        notEmpty: {
          msg: `latitude harus diisi`
        }
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: `longitude harus diisi`
        },
        notEmpty: {
          msg: `longitude harus diisi`
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};