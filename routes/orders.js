const router = require('express').Router();
const models = require('../models');

const Orders = models.Orders;

router.get("/" , (req, res)=>{ Orders.finAll()
    .then(orders => {
        const ordersList = orders.map(orders => orders.dataValues)
        res.send(ordersList)
    });
})

module.exports = router;