'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrders = sequelize.define('ProductsOrders', {
    productId: DataTypes.STRING,
    orderId: DataTypes.STRING
  }, {});
  ProductsOrders.associate = function(models) {
    // associations can be defined here

    ProductsOrders.belongsTo(models.Products, {
      foreignKey : 'idp'
    })

    ProductsOrders.belongsTo(models.Orders, {
      foreignKey : 'ido'
    })
  };
  return ProductsOrders;
};