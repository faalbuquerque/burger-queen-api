'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here

    Orders.belongsTo(models.User, {
      foreignKey : 'uid'
    })

    Orders.hasMany(models.ProductsOrders,{
      foreignKey: 'ido'

    });


  };

  //Orders.create({status: 'pendente', uid:'2'});
  return Orders;
};