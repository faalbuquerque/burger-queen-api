'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
    Products.hasMany(models.ProductsOrders,{
      foreignKey: 'idp'

    });
  };

//Products.create({name: 'Hamburguer',price:'R$15,00'});

  return Products;
};